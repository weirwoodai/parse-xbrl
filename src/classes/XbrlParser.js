import { fork } from 'child_process';
import { promises as fs } from 'fs';
import _ from 'lodash';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { toJson } from 'xml2json';
import { loadFundamentalAccountingConcepts } from '../utils/FundamentalAccountingConcepts.js';
import {
  canConstructDateWithMultipleComponents,
  constructDateWithMultipleComponents,
  formatNumber,
  getPropertyFrom,
  getVariable,
  search,
  searchVariable
} from '../utils/utils.js';
import { Context } from './Context.js';
import { Facts } from './fact/Facts.js';

export class XbrlParser {
  constructor(data) {
    this.data = data;
    this.document = this.data[Object.keys(this.data)[0]];
    this.fields = null;
    this.contextsMap = null;
    this.contextsMapPromise = null;
  }

  static async parse(path) {
    return await XbrlParser.parseStr(await fs.readFile(path, 'utf8'));
  }

  static async parseStr(str) {
    const data = toJson(str, { object: true });
    return await new XbrlParser(data).getFields();
  }

  async _readData() {
    // start building
    this.getContextsMap();
    this.fields = {};
    this.loadField('EntityRegistrantName');
    this.loadField('CurrentFiscalYearEndDate');
    this.loadField('EntityCentralIndexKey');
    this.loadField('EntityFilerCategory');
    this.loadField('TradingSymbol');
    this.loadField('DocumentPeriodEndDate');
    this.loadField('DocumentFiscalYearFocus');
    this.loadField('DocumentFiscalPeriodFocus');
    this.loadField('DocumentFiscalYearFocus', 'DocumentFiscalYearFocusContext', 'contextRef');
    this.loadField('DocumentFiscalPeriodFocus', 'DocumentFiscalPeriodFocusContext', 'contextRef');
    this.loadField('DocumentType');

    this.documentType = this.fields['DocumentType'];

    const currentYearEnd = await this.getYear();
    if (!currentYearEnd) throw new Error('No end year found');

    const durations = this.getContextForDurations(currentYearEnd);
    this.fields['IncomeStatementPeriodYTD'] = durations.incomeStatementPeriodYTD;
    this.fields['ContextForInstants'] = await this.getContextForInstants(currentYearEnd);
    this.fields['ContextForDurations'] = durations.contextForDurations;
    this.fields['BalanceSheetDate'] = currentYearEnd;
    // Load the rest of the facts
    await loadFundamentalAccountingConcepts(this);
  }

  getDocument() {
    return this.document;
  }

  async getFields() {
    if (this.fields === null) await this._readData();
    return this.fields;
  }

  async getYear() {
    const fields = await this.getFields();
    const currentEnd = fields['DocumentPeriodEndDate'];
    const currentYear = fields['DocumentFiscalYearFocus'];

    if (canConstructDateWithMultipleComponents(currentEnd, currentYear)) {
      return constructDateWithMultipleComponents(currentEnd, currentYear);
    }

    const endDate = new Date(currentEnd);
    if (!/Invalid date/.test(endDate)) return currentEnd;

    throw new Error(`${currentEnd} is not a date!`);
  }

  loadField(concept, fieldName = concept, key = '$t') {
    this.fields[fieldName] = getPropertyFrom(this.document, concept, key);
  }

  getRawContexts() {
    const [obj, paths] = [this.document, ['xbrli:context', 'context']];
    const result = getVariable(obj, paths) ?? searchVariable(obj, paths);
    if (!result) throw new Error('No contexts found!');

    return result;
  }

  getContexts() {
    return this.getRawContexts().map(c => new Context(c));
  }

  async getContextsMap() {
    if (this.contextsMap === null && this.contextsMapPromise === null) {
      this.contextsMapPromise = new Promise((resolve, reject) => {
        const __dirname = dirname(fileURLToPath(import.meta.url));
        const getContextsMapFile = join(__dirname, '..', 'utils', 'getContextsMap.js');
        const worker = fork(getContextsMapFile);
        worker.on('message', ({ type, data }) => {
          if (type === 'ready') worker.send({ type: 'contexts', data: this.getRawContexts() });

          if (type === 'contexts') {
            this.contextsMap = data.reduce((hashMap, [id, context]) => {
              hashMap[id] = new Context(context);
              return hashMap;
            }, {});
            worker.send({ type: 'stop' });
            resolve();
          }
        });

        worker.once('exit', code => {
          if (code !== 0) return reject(`Worker exited with code ${code}`);
        });
      });
    }

    if (this.contextsMap === null && this.contextsMapPromise !== null) {
      await this.contextsMapPromise;
    }

    return this.contextsMap;
  }

  getDurationContexts() {
    return this.getContexts().filter(c => c.isDuration());
  }

  getInstantContexts() {
    return this.getContexts().filter(c => c.isInstant());
  }

  getNodeList(names) {
    const allNodes = [];

    for (const name of names) {
      allNodes.push(...search(this.document, name));
    }

    return allNodes.flat().filter(n => typeof n !== 'undefined');
  }

  getContextForDurations(endDate) {
    let contextForDurations = null;
    let startDateYTD = '2099-01-01';
    const contexts = this.getDurationContexts();

    const nodes = this.getNodeList([
      'us-gaap:CashAndCashEquivalentsPeriodIncreaseDecrease',
      'us-gaap:CashPeriodIncreaseDecrease',
      'us-gaap:NetIncomeLoss',
      'dei:DocumentPeriodEndDate'
    ]);

    for (const node of nodes) {
      contexts
        .filter(context => context.represents(node, endDate))
        .forEach(context => {
          if (context.startsBefore(startDateYTD)) {
            startDateYTD = context.getStartDate();
            contextForDurations = context.id;
          }
        });
    }

    return {
      contextForDurations: contextForDurations,
      incomeStatementPeriodYTD: startDateYTD
    };
  }

  async getContextForInstants(endDate) {
    let contextForInstants = null;
    const contexts = this.getInstantContexts();

    // Uses the concept ASSETS to find the correct instant context
    const nodes = this.getNodeList([
      'us-gaap:Assets',
      'us-gaap:AssetsCurrent',
      'us-gaap:LiabilitiesAndStockholdersEquity'
    ]);

    for (const node of nodes) {
      const context = contexts.filter(context => context.represents(node, endDate)).pop();
      if (context) contextForInstants = context.id;
    }

    if (contextForInstants !== null) return contextForInstants;
    return await this.lookForAlternativeInstantsContext();
  }

  async lookForAlternativeInstantsContext() {
    const fields = await this.getFields();
    let altContextId = null;
    let altNodesArr = _.filter(
      _.get(this.document, ['xbrli:context', 'xbrli:period', 'xbrli:instant']) ||
        _.get(this.document, ['context', 'period', 'instant']),
      node => node === fields['BalanceSheetDate']
    );

    for (let h = 0; h < altNodesArr.length; h += 1) {
      _.get(this.document, ['us-gaap:Assets']).forEach(node => {
        if (node.contextRef === altNodesArr[h].id) {
          altContextId = altNodesArr[h].id;
        }
      });
    }
    return altContextId;
  }

  async getInstantFactValue(concept) {
    const fields = await this.getFields();
    return this.getFactValue(concept, fields['ContextForInstants']);
  }

  async getDurationFactValue(concept) {
    const fields = await this.getFields();
    return this.getFactValue(concept, fields['ContextForDurations']);
  }

  getFactValue(concept, contextReference) {
    const factNode = search(this.document, concept)
      .filter(node => node.contextRef === contextReference)
      .pop();

    if (!factNode) return null;

    if (Object.keys(factNode).some(k => k.includes('nil'))) {
      return 0;
    }

    let factValue = factNode['$t'];
    if (typeof factValue === 'string') {
      factValue = parseFloat(formatNumber(factNode.format, factValue));
    }

    const scale = parseInt(factNode.scale) || 0;
    return factValue * 10 ** scale;
  }

  async getFact(concept) {
    const contexts = await this.getContextsMap();
    return new Facts(this, contexts, concept);
  }
}

export default XbrlParser;

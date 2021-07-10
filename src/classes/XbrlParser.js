import { promises as fs } from 'fs';
import _ from 'lodash';
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
    this.document = '';
    this.fields = {};
    this.contextsMap = null;
    this.init(data);
  }

  static async parse(path) {
    return await XbrlParser.parseStr(await fs.readFile(path, 'utf8'));
  }

  static async parseStr(str) {
    const data = JSON.parse(toJson(str));
    return Promise.resolve(new XbrlParser(data).fields);
  }

  init(data) {
    this.document = data[Object.keys(data)[0]];
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

    const currentYearEnd = this.getYear();
    if (!currentYearEnd) throw new Error('No end year found');

    const durationContext = this.getContextForDurations();
    this.fields['ContextForDurations'] = durationContext.id;
    const instantContext = this.getContextForInstants(durationContext.getEndDate());
    this.fields['ContextForInstants'] = instantContext.id;
    this.fields['IncomeStatementPeriodYTD'] = durationContext.getStartDate();
    this.fields['BalanceSheetDate'] = currentYearEnd;
    // Load the rest of the facts
    loadFundamentalAccountingConcepts(this);
  }

  getDocument() {
    return this.document;
  }

  getFields() {
    return this.fields;
  }

  getYear() {
    const currentEnd = this.fields['DocumentPeriodEndDate'];
    const currentYear = this.fields['DocumentFiscalYearFocus'];

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

  getContexts() {
    const [obj, paths] = [this.document, ['xbrli:context', 'context']];
    const result = getVariable(obj, paths) ?? searchVariable(obj, paths);
    if (result) return result.map(c => new Context(c));

    throw new Error('No contexts found!');
  }

  getContextsMap() {
    if (this.contextsMap === null) {
      const toHashMap = (hashMap, b) => {
        hashMap[b.id] = b;
        return hashMap;
      };
      this.contextsMap = this.getContextsWithoutExplicitMember().reduce(toHashMap, {});
    }

    return this.contextsMap;
  }

  getContextsWithoutExplicitMember() {
    return this.getContexts().filter(c => !c.hasExplicitMember());
  }

  getDurationContexts() {
    return this.getContextsWithoutExplicitMember().filter(c => c.isDuration());
  }

  getInstantContexts() {
    return this.getContextsWithoutExplicitMember().filter(c => c.isInstant());
  }

  getContextForDurations() {
    const contexts = this.getDurationContexts();
    const context = contexts.find(c => c.id === this.fields.DocumentFiscalYearFocusContext);

    if (!context) throw new Error('Could not find context for durations');

    return context;
  }

  getContextForInstants(endDate) {
    const contextForInstants = this.getInstantContexts().find(c => c.getEndDate() === endDate);
    if (!contextForInstants) throw new Error('Context for instants not found');

    return contextForInstants;
  }

  lookForAlternativeInstantsContext() {
    let altContextId = null;
    let altNodesArr = _.filter(
      _.get(this.document, ['xbrli:context', 'xbrli:period', 'xbrli:instant']) ||
        _.get(this.document, ['context', 'period', 'instant']),
      node => node === this.fields['BalanceSheetDate']
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

  getInstantFactValue(concept) {
    return this.getFactValue(concept, this.fields['ContextForInstants']);
  }

  getDurationFactValue(concept) {
    return this.getFactValue(concept, this.fields['ContextForDurations']);
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

  getFact(concept) {
    return new Facts(this, concept);
  }
}

export default XbrlParser;

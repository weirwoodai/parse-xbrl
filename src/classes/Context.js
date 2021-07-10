import { getVariable } from '../utils/utils.js';
const MS_IN_A_DAY = 24 * 60 * 60 * 1000;

const TWO_WEEKS_TO_YEAR_END = 12 * 30 - 15;
const TWO_WEEKS_FROM_YEAR_END = 12 * 30 + 15;
const TWO_WEEKS_TO_QUARTER_END = 3 * 30 - 15;
const TWO_WEEKS_FROM_QUARTER_END = 3 * 30 + 15;

export class Context {
  #context;

  constructor(context) {
    this.#context = context;
  }

  get id() {
    return this.#context.id;
  }

  get durationDays() {
    const startDate = new Date(this.getStartDate());
    const endDate = new Date(this.getEndDate());
    return Math.floor((endDate - startDate) / MS_IN_A_DAY);
  }

  _qualifiesAs10K() {
    return TWO_WEEKS_TO_YEAR_END < this.durationDays && this.durationDays < TWO_WEEKS_FROM_YEAR_END;
  }

  _qualifiesAs10Q() {
    return (
      TWO_WEEKS_TO_QUARTER_END < this.durationDays && this.durationDays < TWO_WEEKS_FROM_QUARTER_END
    );
  }

  qualifiesAs(type) {
    if (this.isInstant()) return true;
    if (type === '10-K') return this._qualifiesAs10K();
    if (type === '10-Q') return this._qualifiesAs10Q();

    throw new Error(`Unknown ${type}!`);
  }

  isDuration() {
    return !this.isInstant();
  }

  isInstant() {
    try {
      this.getInstant();
      return true;
    } catch (ex) {
      if (/No instant found/.test(ex)) return false;

      throw ex;
    }
  }

  getStartDate() {
    if (this.isInstant()) return this.getInstant();

    const paths = [
      ['xbrli:period', 'xbrli:startDate'],
      ['period', 'startDate']
    ];
    const startDate = getVariable(this.#context, paths);
    if (startDate === null || startDate === undefined) throw new Error('No start date found!');
    if (/Invalid date/.test(new Date(startDate))) throw new Error(`Invalid date: ${startDate}`);

    return startDate;
  }

  getEndDate() {
    if (this.isInstant()) return this.getInstant();

    const paths = [
      ['xbrli:period', 'xbrli:endDate'],
      ['period', 'endDate']
    ];
    const endDate = getVariable(this.#context, paths);
    if (endDate === null || endDate === undefined) throw new Error('No end date found!');
    if (/Invalid date/.test(new Date(endDate))) throw new Error(`Invalid date: ${endDate}`);

    return endDate;
  }

  getInstant() {
    const paths = [
      ['xbrli:period', 'xbrli:instant'],
      ['period', 'instant']
    ];
    const instant = getVariable(this.#context, paths);
    if (instant === null || instant === undefined) throw new Error('No instant found!');
    if (/Invalid date/.test(new Date(instant))) throw new Error(`Invalid date: ${instant}`);

    return instant;
  }

  isSameDate(date, epsilon = 0) {
    return Math.abs(new Date(this.getEndDate()) - new Date(date)) <= epsilon;
  }

  hasExplicitMember() {
    return this.getExplicitMember() ? true : false;
  }

  getExplicitMember() {
    const paths = [
      ['xbrli:entity', 'xbrli:segment', 'xbrldi:explicitMember'],
      ['entity', 'segment', 'explicitMember'],
      ['entity', 'segment', 'xbrldi:explicitMember']
    ];
    return getVariable(this.#context, paths);
  }

  represents(node, date) {
    if (this.hasExplicitMember()) return false;
    return this.id === node.contextRef && this.isSameDate(date, MS_IN_A_DAY);
  }

  startsBefore(date) {
    return new Date(this.getStartDate()) <= new Date(date);
  }

  endsBefore(date) {
    return new Date(this.getEndDate()) <= new Date(date);
  }
}

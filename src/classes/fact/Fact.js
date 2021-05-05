import { formatNumber } from '../../utils/utils.js';

export class Fact {
  #context;
  #fact;

  constructor(fact, context) {
    this.#fact = fact;
    this.#context = context;
  }

  get value() {
    if (Object.keys(this).some(k => k.includes('nil'))) return 0;

    return this.sign * this.inner * this.scale;
  }

  get scale() {
    return 10 ** (parseInt(this.#fact['scale']) || 0);
  }

  get inner() {
    if (typeof this.#fact['$t'] === 'string') {
      return parseFloat(formatNumber(this.#fact['format'], this.#fact['$t']));
    }
    return this.#fact['$t'];
  }

  get sign() {
    return this.#fact['sign'] === '-' ? -1 : 1;
  }

  get context() {
    return this.#context;
  }

  get contextRef() {
    return this.#fact.contextRef;
  }

  computeValue(sign, scale) {
    return;
  }

  static latest(a, b) {
    if (!(a instanceof Fact) || !(b instanceof Fact)) {
      throw new TypeError('Arguments are not instances of the Fact class!');
    }

    if (a.context.endsBefore(b.context.getEndDate())) return b;
    return a;
  }
}

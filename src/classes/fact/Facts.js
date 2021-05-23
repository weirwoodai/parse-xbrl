import { search } from '../../utils/utils.js';
import { Context } from '../Context.js';
import { Fact } from './Fact.js';

export class Facts {
  #facts;
  #contexts;
  #concept;

  constructor(xbrlParser, concept) {
    const toHashMap = (hashMap, b) => ({ ...hashMap, [b.id]: b });

    const contexts = xbrlParser.getContexts();
    this.#contexts = contexts.filter(c => !c.hasExplicitMember()).reduce(toHashMap, {});

    this.#concept = concept;
    const facts = search(xbrlParser.document, this.#concept);
    this.#facts = facts
      .filter(f => this.#contexts[f.contextRef] instanceof Context)
      .map(f => new Fact(this.#concept, f, this.#contexts[f.contextRef]))
      .filter(f => f.qualifiesAs(xbrlParser.documentType));
  }

  get concept() {
    return this.#concept;
  }

  get facts() {
    return this.#facts;
  }

  getMostRecentValue() {
    if (this.#facts.length === 0) return null;
    return this.#facts.reduce(Fact.latest).value;
  }
}

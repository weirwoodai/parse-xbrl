import { Context } from '../Context.js';
import { Fact } from './Fact.js';
import { search } from '../../utils/utils.js';

export class Facts {
  #facts;
  #contexts;

  constructor(xbrlParser, concept) {
    const toHashMap = (hashMap, b) => ({ ...hashMap, [b.id]: b });

    const contexts = xbrlParser.getContexts();
    this.#contexts = contexts.filter(c => !c.hasExplicitMember()).reduce(toHashMap, {});

    const facts = search(xbrlParser.document, concept);
    this.#facts = facts
      .filter(f => this.#contexts[f.contextRef] instanceof Context)
      .map(f => new Fact(concept, f, this.#contexts[f.contextRef]))
      .filter(f => f.qualifiesAs(xbrlParser.documentType));
  }

  get facts() {
    return this.#facts;
  }

  getMostRecent() {
    if (this.#facts.length === 0) return { value: null };
    return this.#facts.reduce(Fact.latest);
  }
}

import { Fact } from './Fact.js';
import { search } from '../../utils/utils.js';
export class Facts {
  #facts;
  #contexts;
  #documentType;
  #concept;

  constructor(xbrlParser, concept) {
    const toHashMap = (hashMap, b) => ({ ...hashMap, [b.id]: b });

    const contexts = xbrlParser.getContexts();
    this.#contexts = contexts.filter(c => !c.hasExplicitMember()).reduce(toHashMap, {});

    const facts = search(xbrlParser.document, concept);
    this.#facts = facts
      .filter(f => this.#contexts[f.contextRef])
      .map(f => new Fact(concept, f, this.#contexts[f.contextRef]));

    this.#concept = concept;
    this.#documentType = xbrlParser.documentType;
  }

  get facts() {
    return this.#facts;
  }

  getMostRecent() {
    const filtered = this.#facts.filter(f => f.fitsInDocType(this.#documentType));
    if (filtered.length === 0) return null;
    return filtered.reduce(Fact.latest);
  }
}

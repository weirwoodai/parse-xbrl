import { Context } from '../classes/Context.js';

const toHashMapEntries = (hashMap, b) => {
  hashMap.push([b.id, b.raw]);
  return hashMap;
};

process.on('message', ({ type, data }) => {
  if (type === 'stop') return process.exit(0);
  const entries = data
    .map(c => new Context(c))
    .filter(c => !c.hasExplicitMember())
    .reduce(toHashMapEntries, []);
  process.send({ type: 'contexts', data: entries });
});

process.send({ type: 'ready' });

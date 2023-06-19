// joinHashmaps.js

function leftJoin(synonyms, antonyms) {
  const result = [];

  for (let key in synonyms) {
    let synonym = synonyms[key];
    let antonym = antonyms[key] ? antonyms[key] : null;
    result.push([key, synonym, antonym]);
  }

  return result;
}

function rightJoin(synonyms, antonyms) {
  const result = [];

  for (let key in antonyms) {
    let antonym = antonyms[key];
    let synonym = synonyms[key] ? synonyms[key] : null;
    result.push([key, synonym, antonym]);
  }

  return result;
}

module.exports = { leftJoin, rightJoin };

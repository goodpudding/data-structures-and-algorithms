function wordCount(string) {
  const words = string.toLowerCase().split(/\W+/);
  const wordCounts = new Map();

  for (let word of words) {
    if (wordCounts.has(word)) {
      return word;
    } else {
      wordCounts.set(word, 1);
    }
  }

  return null;
}



module.exports = wordCount;


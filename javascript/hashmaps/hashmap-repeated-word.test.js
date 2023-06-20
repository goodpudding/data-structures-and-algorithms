const wordCount = require('./hashmap-repeated-word'); // Assuming the function is defined in a separate file

describe('wordCount', () => {
  test('returns the first repeated word', () => {
    expect(wordCount('Once upon a time, there was a brave princess who...')).toBe('a');
    expect(wordCount('It was the best of times, it was the worst of times, it was the age of wisdom...')).toBe('it');
    expect(wordCount('It was a queer, sultry summer, the summer they electrocuted the Rosenbergs...')).toBe('summer');
  });

  test('returns null when no repeated words are found', () => {
    expect(wordCount('This is a sample sentence with no repeated words.')).toBe(null);
  });

  test('handles empty string', () => {
    expect(wordCount('')).toBe(null);
  });
});

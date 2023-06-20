// joinHashmaps.test.js

const { leftJoin, rightJoin } = require('./joinHashmaps');

describe('Testing leftJoin function', () => {
  const synonyms = {
    diligent: 'employed',
    fond: 'enamored',
    guide: 'usher',
    outfit: 'garb',
    wrath: 'anger',
  };

  const antonyms = {
    diligent: 'idle',
    fond: 'averse',
    guide: 'follow',
    wrath: 'delight',
  };

  test('should return correct result with matching keys', () => {
    const expected = [
      ['diligent', 'employed', 'idle'],
      ['fond', 'enamored', 'averse'],
      ['guide', 'usher', 'follow'],
      ['outfit', 'garb', null],
      ['wrath', 'anger', 'delight'],
    ];
    expect(leftJoin(synonyms, antonyms)).toEqual(expected);
  });

  test('should return an empty array when synonyms is empty', () => {
    expect(leftJoin({}, antonyms)).toEqual([]);
  });

  test('should return null for non-matching keys', () => {
    const synonyms = { key1: 'value1' };
    const antonyms = { key2: 'value2' };
    const expected = [['key1', 'value1', null]];
    expect(leftJoin(synonyms, antonyms)).toEqual(expected);
  });

  test('should handle null values in hashmaps', () => {
    const synonyms = { key1: null };
    const antonyms = { key1: 'value1' };
    const expected = [['key1', null, 'value1']];
    expect(leftJoin(synonyms, antonyms)).toEqual(expected);
  });

  test('should handle empty strings as keys', () => {
    const synonyms = { '': 'value1' };
    const antonyms = { '': 'value2' };
    const expected = [['', 'value1', 'value2']];
    expect(leftJoin(synonyms, antonyms)).toEqual(expected);
  });
});

describe('Testing rightJoin function', () => {
  const synonyms = {
    diligent: 'employed',
    fond: 'enamored',
    guide: 'usher',
    wrath: 'anger',
  };

  const antonyms = {
    diligent: 'idle',
    fond: 'averse',
    guide: 'follow',
    wrath: 'delight',
  };

  test('should return correct result with matching keys', () => {
    const expected = [
      ['diligent', 'employed', 'idle'],
      ['fond', 'enamored', 'averse'],
      ['guide', 'usher', 'follow'],
      ['wrath', 'anger', 'delight'],
    ];
    expect(rightJoin(synonyms, antonyms)).toEqual(expected);
  });

  test('should return an empty array when antonyms is empty', () => {
    expect(rightJoin(synonyms, {})).toEqual([]);
  });

  test('should return null for non-matching keys', () => {
    const synonyms = { key1: 'value1' };
    const antonyms = { key2: 'value2' };
    const expected = [['key2', null, 'value2']];
    expect(rightJoin(synonyms, antonyms)).toEqual(expected);
  });

  test('should handle null values in hashmaps', () => {
    const synonyms = { key1: 'value1' };
    const antonyms = { key1: null };
    const expected = [['key1', 'value1', null]];
    expect(rightJoin(synonyms, antonyms)).toEqual(expected);
  });

  test('should handle empty strings as keys', () => {
    const synonyms = { '': 'value1' };
    const antonyms = { '': 'value2' };
    const expected = [['', 'value1', 'value2']];
    expect(rightJoin(synonyms, antonyms)).toEqual(expected);
  });
});

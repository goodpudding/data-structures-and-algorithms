const { validateBrackets } = require('../validateBrackets');

describe('validateBrackets', () => {
  test('returns true for valid brackets', () => {
    expect(validateBrackets('')).toBe(true);
    expect(validateBrackets('()')).toBe(true);
    expect(validateBrackets('[]')).toBe(true);
    expect(validateBrackets('{}')).toBe(true);
    expect(validateBrackets('({[]})')).toBe(true);
    expect(validateBrackets('()[]{}')).toBe(true);
    expect(validateBrackets('(())[]{}')).toBe(true);
    expect(validateBrackets('({[]})[(){}]')).toBe(true);
  });

  test('returns false for invalid brackets', () => {
    expect(validateBrackets('(')).toBe(false);
    expect(validateBrackets('[')).toBe(false);
    expect(validateBrackets('{')).toBe(false);
    expect(validateBrackets(')')).toBe(false);
    expect(validateBrackets(']')).toBe(false);
    expect(validateBrackets('}')).toBe(false);
    expect(validateBrackets('({)}')).toBe(false);
    expect(validateBrackets('([{]}))')).toBe(false);
    expect(validateBrackets('(]')).toBe(false);
    expect(validateBrackets('([)]')).toBe(false);
    expect(validateBrackets('}{')).toBe(false);
    expect(validateBrackets('[(])')).toBe(false);
  });

  test('returns false for non-bracket input', () => {
    expect(validateBrackets('hello')).toBe(false);
    expect(validateBrackets('123')).toBe(false);
    expect(validateBrackets('(a)')).toBe(false);
    expect(validateBrackets('[1, 2, 3]')).toBe(false);
    expect(validateBrackets('foo()')).toBe(false);
  });

  test('handles edge cases', () => {
    expect(validateBrackets(null)).toBe(false);
    expect(validateBrackets(undefined)).toBe(false);
    expect(validateBrackets()).toBe(false);
  });
});

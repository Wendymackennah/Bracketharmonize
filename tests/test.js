const isBalancedB = require('../site02');

describe('isBalancedB function', () => {
  test('returns true for a string with balanced brackets', () => {
    expect(isBalancedB("[()]{}{[()()]()}")).toBe(true);
  });

  test('returns true for a string with balanced brackets', () => {
    expect(isBalancedB("([{}])")).toBe(true);
  });

  test('returns false for a string with unbalanced brackets', () => {
    expect(isBalancedB("{(})[]")).toBe(false);
  });

  test('returns false for a string with unbalanced brackets', () => {
    expect(isBalancedB("[(])")).toBe(false);
  });

  test('returns false for a string with unbalanced brackets', () => {
    expect(isBalancedB("[()")).toBe(false);
  });

  test('returns true for an empty string', () => {
    expect(isBalancedB("")).toBe(true);
  });

  test('returns true for a string with no brackets', () => {
    expect(isBalancedB("abc123")).toBe(true);
  });
});

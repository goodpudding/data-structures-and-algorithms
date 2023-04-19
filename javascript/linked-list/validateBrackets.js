function validateBrackets(str) {
  if (str === null || str === undefined) {
    return false;
  }
  const stack = [];
  const bracketsMap = {
    '(': ')',
    '[': ']',
    '{': '}'
  };
  for (const char of str) {
    if (!bracketsMap[char] && !Object.values(bracketsMap).includes(char)) {
      return false;
    }
    if (bracketsMap[char]) {
      stack.push(bracketsMap[char]);
    } else if (Object.values(bracketsMap).includes(char)) {
      if (stack.pop() !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

module.exports = {
  validateBrackets
};

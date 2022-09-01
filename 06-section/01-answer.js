module.exports = function (...args) {
  const [braces] = args;
  let braceCount = 0;
  for (const brace of braces) {
    if (braceCount < 0) return 'NO'
    if (brace === '(') braceCount += 1;
    else if (brace === ')') braceCount -= 1;
  }
  return braceCount === 0 ? 'YES' : 'NO';
};

module.exports.problemName = '1. 올바른 괄호(스택)'

module.exports.testSet = [
  { input: ['(()(()))(()'], output: 'NO' }
];
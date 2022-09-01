module.exports = function (...args) {
  const [[chars]] = args;
  let curlyCount = 0;
  let leftChars = ''
  for (const char of chars) {
    if (char === '(') curlyCount += 1;
    else if (char === ')') curlyCount -= 1;
    else if (curlyCount === 0) leftChars += char;
  }
  return leftChars;
};

module.exports.problemName = '2. 괄호 문자 제거(스택)'

module.exports.testSet = [
  { input: [['(A(BC)D)EF(G(H)(IJ)K)LM(N)']], output: 'EFLM' }
];
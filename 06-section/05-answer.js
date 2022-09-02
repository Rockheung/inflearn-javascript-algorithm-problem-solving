module.exports = function (...args) {
  const [[braces]] = args;
  let pieces = 0;
  let pipes = 0;
  for (let i = 0; i < braces.length; i += 1) {
    if (braces[i] === '(') {
      if (braces[i+1]  === ')') {
        pieces += pipes;
        i += 1;
        continue;
      }
      pipes += 1;
      pieces += 1;
    }
    else if (braces[i] === ')') {
      pipes -= 1;
    }
  }
  return pieces;
};

module.exports.problemName = '5. 쇠막대기(스택)'

module.exports.testSet = [
  { input: [["()()"]], output: 0 },
  { input: [["()(((()())(())()))(())"]], output: 17 },
  { input: [["(((()(()()))(())()))(()())"]], output: 24 },
];

module.exports = function (...args) {
  const [sourceString, targetCharacter] = args;
  let count = 0;
  for (const char of sourceString) {
    if (char === targetCharacter) {
      count += 1;
    }
  }
  return count
};

module.exports.problemName = '10. 문자 찾기'

module.exports.testSet = [
  { input: ['COMPUTERPROGRAMMING', 'R'], output: 3 }
];
module.exports = function (...args) {
  const [i, j, k] = args.sort((a,b) => a - b)
  return i + j > k ? 'YES' : 'NO'
};

module.exports.problemName = '2. 삼각형 판별하기'

module.exports.testSet = [
  { input: [6, 7, 11], output: 'YES' },
  { input: [13, 33, 17], output: 'NO' },
];

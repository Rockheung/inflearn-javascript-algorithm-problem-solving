module.exports = function (...args) {
  return args.reduce((acc, item) => {
    return acc > item ? item : acc;
  });
};

module.exports.problemName = '1. 세 수 중 최솟값'

module.exports.testSet = [
  { input: [6, 5, 11], output: 5 },
  { input: [6], output: 6 },
];

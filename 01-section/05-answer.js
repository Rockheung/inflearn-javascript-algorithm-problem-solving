module.exports = function (...args) {
  return args.reduce((acc, item) => {
    return acc < item ? acc : item
  })
};

module.exports.problemName = '5. 최솟값 구하기'

module.exports.testSet = [
  { input: [5,3,7,11,2,15,17], output: 2 },
];

module.exports = function (...args) {
  const [n] = args
  return new Array(n).fill(1).reduce((acc, _, idx) => {
    return acc + idx + 1
  }, 0)
};

module.exports.problemName = '4. 1부터 N까지의 합'

module.exports.testSet = [
  { input: [6], output: 21 },
];

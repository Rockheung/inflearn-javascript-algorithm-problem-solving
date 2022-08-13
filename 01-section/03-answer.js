module.exports = function (...args) {
  return Math.ceil(args[0]/12)
};

module.exports.problemName = '3. 연필개수'

module.exports.testSet = [
  { input: [25], output: 3 },
];

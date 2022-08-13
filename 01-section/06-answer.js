module.exports = function (...args) {
  const odds = args.filter((arg) => arg % 2)
  const oddsSum = odds.reduce((acc, item) => acc + item);
  const oddsMin = Math.min(...odds);
  return [oddsSum, oddsMin].join('\n')
};

module.exports.problemName = '6. 홀수'

module.exports.testSet = [
  // { input: [], output: 'answer' }
  { input: [12, 77, 38, 41, 53, 92, 85], output: '256\n41' }
];
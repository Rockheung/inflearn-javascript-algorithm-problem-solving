module.exports = function (...args) {
  const [scoreCount, scores] = args;
  const scorePairs = scores.map((score, idx) => {
    return {score, idx}
  })
  const reordered = scorePairs.sort((a, b) => b.score - a.score)
  const scoreMap = reordered.reduce((acc, scoreOrdered, idx) => {
    return{
      [scoreOrdered.score] : idx + 1,
      ...acc,
    }
  },{})
  return scores.map((arg) => scoreMap[arg]).join(' ')
};

module.exports.problemName = '5. 등수구하기'

module.exports.testSet = [
  { input: [5, [87,89,92,100,76]], output: '4 3 2 1 5' },
  { input: [5, [87,92,92,100,76]], output: '4 2 2 1 5' },
  { input: [5, [87,92,92,92,76]], output: '4 1 1 1 5' },
];
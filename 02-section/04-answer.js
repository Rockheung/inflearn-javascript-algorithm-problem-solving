module.exports = function (...args) {
  const [problemCount, problemScore] = args;
  let scoreSum = 0;
  let scoreBonus = 0;
  for (let i = 0; i < problemCount; i += 1) {
    if (problemScore[i] === 0) {
      scoreBonus = 0;
      continue;
    }
    scoreSum += 1 + scoreBonus;
    scoreBonus += 1;
  }
  return scoreSum;
};

module.exports.problemName = "4. 점수 계산";

module.exports.testSet = [
  { input: [10, [1, 0, 1, 1, 1, 0, 0, 1, 1, 0]], output: 10 },
];

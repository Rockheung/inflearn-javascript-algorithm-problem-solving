module.exports = function (...args) {
  const numbers = args;
  let maxSum = 0;
  let maxSumNumber
  for (const number of numbers) {
    let restNum = number;
    let sum = 0;
    while(restNum > 0) {
      sum += restNum % 10;
      restNum = Math.floor(restNum / 10)
    }
    if (sum > maxSum) {
      maxSum = sum;
      maxSumNumber = number;
    } else if (sum === maxSum && number > maxSumNumber) {
      maxSumNumber = number;
    }
  }
  return maxSumNumber;
};

module.exports.problemName = '1. 자리수의 합'

module.exports.testSet = [
  { input: [128,460,603,40,521,137,123], output: 137 }
];
module.exports = function (...args) {
  const [[length],nums] = args;
  for (let i = 0; i < length; i += 1) {
    let smallerIdx = i;
    for (let j = i + 1; j < length; j += 1) {
      smallerIdx = nums[smallerIdx] > nums[j] ? j : smallerIdx;
    }
    let tmp = nums[smallerIdx];
    nums[smallerIdx] = nums[i];
    nums[i] = tmp;
  }
  return nums.join(' ')
};

module.exports.problemName = '1. 선택정렬'

module.exports.testSet = [
  { input: [[6],[13,5,11,7,23,15]], output: '5 7 11 13 15 23' }
];
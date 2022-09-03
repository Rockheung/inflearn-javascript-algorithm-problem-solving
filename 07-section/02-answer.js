module.exports = function (...args) {
  const [[n], nums] = args;
  for (let i = 0; i < n - 1; i += 1) {
    for (let j = 0; j < n - i - 1; j += 1) {
      if (nums[j] > nums[j + 1]) {
        let tmp = nums[j+1];
        nums[j+1] = nums[j];
        nums[j] = tmp;
      }
    }
  }
  return nums.join(' ')
};

module.exports.problemName = '2. 버블정렬'

module.exports.testSet = [
  { input: [[6],[13,5,11,7,23,15]], output: '5 7 11 13 15 23' }
];
module.exports = function (...args) {
  const [[n], nums] = args;
  for (let i = 1; i < n; i += 1) {
    let tmp = nums[i], j;
    for (j = i - 1; j >= 0; j -= 1) {
      if (nums[j] < tmp) {
        break;
      }
      nums[j+1] = nums[j];
    }
    nums[j+1] = tmp;
  }
  return nums.join(" ");
};

module.exports.problemName = '4. 삽입정렬'

module.exports.testSet = [
  { input: [[6],[11,7,5,6,10,9]], output: '5 6 7 9 10 11' }
];
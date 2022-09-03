module.exports = function (...args) {
  const [[n],nums] = args;
  for ( let i = 0; i < n - 1; i += 1) {
    for (let j = 0; j < n - 1 - i; j += 1) {
      if (nums[j] > 0 && nums[j+1] < 0) {
        let tmp = nums[j+1];
        nums[j+1] = nums[j];
        nums[j] = tmp;
      }
    }
  }
  return nums.join(' ')
};

module.exports.problemName = '3. Special Sort(버블정렬응용)'

module.exports.testSet = [
  { input: [[8],[1,2,3,-3,-2,5,6,-6]], output: '-3 -2 -6 1 2 3 5 6' },
  { input: [[8],[3,2,1,-3,-2,5,6,-6]], output: '-3 -2 -6 3 2 1 5 6' }
];
module.exports = function (...args) {
  const [[n,m],nums] = args;
  let answer = 0;
  const sum = (...nums) => nums.reduce((acc, num) => acc + num, 0)
  let i = 0, j = 0;
  while (i < n && j < n) {
    if (sum(...nums.slice(i,j)) < m) {
      j += 1;
    } else if (sum(...nums.slice(i,j)) > m) {
      i += 1;
    } else {
      answer += 1;
      i += 1;
      j += 1;
    }
  }
  return answer
};

module.exports.problemName = '3. 연속부분수열1(Two Pointers Algorithm)'

module.exports.testSet = [
  { input: [[8,6],[1,2,1,3,1,1,1,2]], output: 3 }
];
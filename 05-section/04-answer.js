module.exports = function (...args) {
  const [[n,m],nums] = args;
  let answer = 0;
  const sum = (...nums) => nums.reduce((acc, num) => acc + num, 0)
  for (let i = 0; i < n; i += 1) {
    for (let j = i + 1; j <= n; j += 1) {
      if (sum(...nums.slice(i,j)) > m) break;
      answer += 1;
    }
  }
  return answer
};

module.exports.problemName = '4. 연속부분수열2(Two Pointers Algorithm)'

module.exports.testSet = [
  { input: [[5,5],[1,3,1,2,3]], output: 10 }
];
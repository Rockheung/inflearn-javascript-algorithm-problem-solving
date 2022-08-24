module.exports = function (...args) {
  const [[n,m],nums] = args;
  let answer = 0;
  const sum = (...nums) => nums.reduce((acc, num) => acc + num, 0)
  let i = 0; j = 1;
  while (i < n && j <= n) {
    const sumNums = sum(...nums.slice(i,j));
    if (sumNums === 0) j += 1;
    else if (sumNums > 0 && sumNums < m) {
      answer += 1;
      j += 1;
    } else if (sumNums === m) {
      answer += 1;
      i += 1;
      j = i + 1;
    } else {
      i += 1;
      j = i + 1;
    }
  }
  return answer
};

module.exports.problemName = '4. 연속부분수열2(Two Pointers Algorithm)'

module.exports.testSet = [
  { input: [[5,5],[1,3,1,2,3]], output: 10 }
];
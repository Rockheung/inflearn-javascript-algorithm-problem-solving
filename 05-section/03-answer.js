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

/**
 * - 의구심이 들어 추리 -
 * [a,b,c,d,e] 배열에서 [c,d]를 확인한다고 가정하면
 * 1. [b,c] => [c] => [c,d]
 * 2. [b,c] => [b,c,d] => [c,d]
 * 3. [a,b,c,d] => [b,c,d] => [c,d]
 * 4. [b,c] => [c,d]: sum === m
 * [b,c,d]를 확인하는 경우에 m보다 작아야만 [b,c,d,e]를 체크한다.
 * [c,d]를 확인한다는건 [b,c,d]가 m보다 컸다는 뜻.
 * 그래서 [b,c,d,e]는 확인할 필요가 없게 된다.
 */
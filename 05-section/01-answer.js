module.exports = function (...args) {
  const [[n],arrayN, [m], arrayM] = args;
  let answer = [];
  let i = 0, j = 0;
  while (i < n && j < m) {
    if (arrayN[i] <= arrayM[j]) {
      answer.push(arrayN[i]);
      i += 1;
    } else {
      answer.push(arrayM[j]);
      j += 1;
    }
  }
  answer = [...answer, ...arrayN.slice(i), ...arrayM.slice(j)]
  return answer.join(' ')
};

module.exports.problemName = '1. 두 배열 합치기(Two Pointers Algorithm)'

module.exports.testSet = [
  { input: [[5], [2, 3, 6, 7, 9],[3], [1, 3, 5]], output: "1 2 3 3 5 6 7 9" },
];
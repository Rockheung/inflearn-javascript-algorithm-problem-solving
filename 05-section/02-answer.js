module.exports = function (...args) {
  const [[n], groupA, [m], groupB] = args;
  const groupASorted = groupA.sort((a, b) => a-b)
  const groupBSorted = groupB.sort((a, b) => a-b)
  const answer = []
  let i = 0, j = 0;
  while (i !== n && j !== m) {
    if (groupASorted[i] === groupBSorted[j]) {
      answer.push(groupASorted[i]);
      i += 1;
      j += 1;
    } else if (groupASorted[i] < groupBSorted[j]) {
      i += 1;
    } else {
      j += 1;
    }
  }
  return answer.join(' ')
};

module.exports.problemName = '2. 공통원소구하기(Two Pointers Algorithm)'

module.exports.testSet = [
  { input: [[5], [1, 3, 9, 5, 2], [5], [3, 2, 5, 7, 8]], output: "2 3 5" },
];
module.exports._ = function (...args) {
  const [[n],heights] = args;
  let hyunSuIdx;
  let hyunSuFriendIdx;
  for (let i = 0; i < n - 1; i += 1) {
    if (heights[i] >= heights[i+1]) {
      hyunSuIdx = hyunSuIdx || i;
      hyunSuFriendIdx = i + 1;
      i += 2;
    }
    if (heights[i-1] > heights[i]) {
      hyunSuFriendIdx = i;
      break;
    }
  }

  return [hyunSuIdx+1, hyunSuFriendIdx+1].join(' ')
};

module.exports = function (...args) {
  const [[n],heights] = args;
  const heightsSorted = [...heights].sort((a,b)=> a-b)
  const [hyunSuIdx, hyunSuFriendIdx] = heightsSorted
    .map((height, idx) => (heights[idx] !== height ? idx : -1))
    .filter((idx) => idx > 0);

  return [hyunSuIdx+1, hyunSuFriendIdx+1].join(' ')
}


module.exports.problemName = '6. 장난꾸러기 현수'

module.exports.testSet = [
  { input: [[9],[120,125,152,130,135,135,143,127,160]], output: '3 8' },
  { input: [[6],[120,130,150,150,130,150]], output: '3 5' },
];
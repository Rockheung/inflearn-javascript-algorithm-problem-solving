module.exports = function (...args) {
  const [[s],[t]] = args;
  const getCharsObj = (...word) => word.reduce((obj, char) => {
    obj[char] = (obj[char] || 0) + 1;
    return obj
  }, {})
  const tCharObj = getCharsObj(...t);
  let count = 0;
  for (let i = 0; i < s.length - t.length + 1; i += 1) {
    const chars = getCharsObj(...s.slice(i,i+t.length));
    let isSame = true;
    for (const charT of Object.keys(tCharObj)) {
      isSame = chars[charT] === tCharObj[charT]
      if (!isSame) break;
    }
    if (!isSame) continue;
    count += 1;
  }
  return count;
};

module.exports.problemName =
  "8. 모든 아나그램 찾기(Hash & Sliding Window && Two Pointers Algorithm)";

module.exports.testSet = [
  { input: [['bacaAacba'],['abc']], output: 3 }
];
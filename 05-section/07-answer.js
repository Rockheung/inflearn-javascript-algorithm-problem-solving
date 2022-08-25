module.exports = function (...args) {
  const [[word1], [word2]] = args;
  const word1Obj = {}, word2Obj = {};
  for (const char of word1) {
    word1Obj[char] = (word1Obj[char] || 0) + 1
  }
  for (const char of word2) {
    word2Obj[char] = (word2Obj[char] || 0) + 1
  }
  for (const char of Object.keys(word1Obj)) {
    if (word1Obj[char] !== word2Obj[char]) return 'NO'
  }
  return 'YES'
};

module.exports.problemName = '7. 아나그램(Hash Map)'

module.exports.testSet = [
  { input: [['AbaAeCe'],['baeeACA']], output: 'YES' },
  { input: [['abaCC'],['Caaab']], output: 'NO' }
];
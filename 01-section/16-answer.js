module.exports = function (...args) {
  const [word] = args;
  const wordIndexes = {};
  let wordUnique = ''
  for (let i = 0; i < word.length; i += 1) {
    if (typeof wordIndexes[word[i]] === 'undefined') {
      wordIndexes[word[i]] = i;
      wordUnique += word[i]
    }
  }
  return wordUnique;
};

module.exports.problemName = '16. 중복문자제거(indexOf)'

module.exports.testSet = [
  { input: ['ksekket'], output: 'kset' }
];
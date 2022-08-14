module.exports = function (...args) {
  const [wordCount, ...words] = args;
  const wordsBook = {}
  const wordsUnique = []
  for(let i = 0; i < wordCount; i += 1) {
    if (typeof wordsBook[words[i]] === 'undefined') {
      wordsBook[words[i]] = i;
      wordsUnique.push(words[i])
    }
  }
  
  return wordsUnique.join('\n')
};

module.exports.problemName = '17. 중복단어제거'

module.exports.testSet = [
  { input: [5, 'good', 'time', 'good', 'time', 'student'], output: ['good', 'time', 'student'].join('\n') }
];
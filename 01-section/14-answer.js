module.exports = function (...args) {
  return args.reduce((longestWord, word) => longestWord.length > word.length ? longestWord : word)
};

module.exports.problemName = '14. 가장 긴 문자열'

module.exports.testSet = [
  { input: ['5', 'teacher', 'time', 'student', 'beautiful', 'good'], output: 'beautiful' }
];
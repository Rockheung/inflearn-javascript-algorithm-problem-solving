module.exports = function (...args) {
  const [word] = args;
  let newWord = "";

  for (const char of word) {
    if (char.toUpperCase() === char) {
      newWord += char.toLowerCase();
    } else {
      newWord += char.toUpperCase();
    }
  }
  return newWord;
};

module.exports.problemName = '13. 대소문자변환'

module.exports.testSet = [
  { input: ['StuDY'], output: 'sTUdy' }
];
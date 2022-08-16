module.exports = function (...args) {
  const [word] = args;
  let zipped = ''
  let lastChar;
  let charCount = 0;
  for (const char of word) {
    if (lastChar !== char) {
      if (charCount > 1) zipped += charCount;
      zipped += char;
      lastChar = char;
      charCount = 1;
    } else {
      charCount += 1;
    }
  }
  return zipped;
};

module.exports.problemName = '5. 문자열 압축'

module.exports.testSet = [
  { input: ['KKHSSSSSSSE'], output: 'K2HS7E' }
];
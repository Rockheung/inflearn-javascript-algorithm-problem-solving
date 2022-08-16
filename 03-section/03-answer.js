module.exports = function (...args) {
  const [word] = args;
  let numberChars = ''
  for (const char of word) {
    if (/[0-9]/.test(char)) {
      numberChars += char;
    }
  }
  return +numberChars;
};

module.exports.problemName = '3. 숫자만 추출'

module.exports.testSet = [
  { input: ["g0en2T0s8eSoft"], output: 208 }
];
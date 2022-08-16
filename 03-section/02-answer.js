module.exports = function (...args) {
  const [chars] = args;
  for (let i = 0; i < Math.ceil(chars.length / 2); i += 1) {
    if (!/[A-Za-z]/.test(chars[i]) || !/[A-Za-z]/.test(chars[chars.length - 1 - i])) {
      i += 1;
      continue;
    }
    if (chars[i].toLowerCase() !== chars[chars.length - 1 - i].toLowerCase()) {
      return 'NO'
    }
  }
  return 'YES'
};

module.exports.problemName = '2. 팰린드롬'

module.exports.testSet = [
  { input: ['found7, time: study; Yduts; emit, 7Dnuof'], output: 'YES' }
];
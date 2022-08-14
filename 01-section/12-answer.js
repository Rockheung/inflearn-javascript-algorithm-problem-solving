module.exports = function (...args) {
  const [word] = args;
  return word.toUpperCase();
};

module.exports.problemName = '12. 대문자로 통일'

module.exports.testSet = [
  { input: ['ItisTimeToStudy'], output: 'ITISTIMETOSTUDY' }
];
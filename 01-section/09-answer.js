module.exports = function (...args) {
  const [arg] = args;
  return arg.replace(/A/g, '#')
};

module.exports.problemName = '9. A를 #으로'

module.exports.testSet = [
  // { input: [], output: 'answer' }
  { input: ['BANANA'], output: 'B#N#N#' }
];
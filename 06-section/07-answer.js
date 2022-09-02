module.exports = function (...args) {
  const [[mustSignUp, lectures]] = args;
  let i = 0;
  for (const lecture of lectures) {
    if (lecture === mustSignUp[i]) i += 1;
  }
  return mustSignUp.length === i ? "YES" : "NO";
};

module.exports.problemName = '7. 교육과정설계(큐)'

module.exports.testSet = [
  { input: [['CBA','CBDAGE']], output: 'YES' },
  { input: [['CBA','CDAGBE']], output: 'NO' }
];
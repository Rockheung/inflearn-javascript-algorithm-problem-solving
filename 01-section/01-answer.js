module.exports = function (...args) {
  const [arg0] = args;
  return arg0.reduce((acc, item) => {
    return acc > item ? item : acc;
  });
};

module.exports.testSet = [
  { input: [[6, 5, 11]], output: 5 },
  { input: [[6]], output: 6 },
];

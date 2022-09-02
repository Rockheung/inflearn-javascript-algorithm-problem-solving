module.exports = function (...args) {
  const [[n,k]] = args;
  let princes = Array.from(new Array(n), (_, idx) => idx + 1);
  let i = 0;
  while (princes.length > 1) {
    if ((i + 1) % 3 === 0) {
      princes = princes.slice(1);
      i = 0;
    } else {
      princes = [...princes.slice(1), princes[0]];
      i += 1;
    }
  }
  return princes[0]
};

module.exports.problemName = '6. 공주구하기(큐)'

module.exports.testSet = [
  { input: [[8,3]], output: 7 }
];
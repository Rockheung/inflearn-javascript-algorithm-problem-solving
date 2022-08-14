/**
 * 그냥 정말로 다 확인하면 되는 문제다.
 */
module.exports = function (...args) {
  const over = args.reduce((acc, item) => acc + item) - 100;
  for (let i = 0; i < args.length - 1; i += 1) {
    for (let j = i + 1; j < args.length; j += 1) {
      if (i === j) continue;
      if (args[i] + args[j] === over) {
        return args.filter((arg, idx) => idx !== i && idx !== j).join(" ");
      }
    }
  }
};

module.exports.problemName = "8. 일곱난쟁이";

module.exports.testSet = [
  // { input: [], output: 'answer' }
  { input: [20, 7, 23, 19, 10, 15, 25, 8, 13], output: "20 7 23 19 10 8 13" },
];

module.exports = function (...args) {
  const [word] = args;
  const isWordLengthOdd = Boolean(word.length % 2);
  if (isWordLengthOdd) {
    return word[(word.length - 1) / 2];
  }
  return word[word.length / 2 - 1] + word[word.length / 2]
};

module.exports.problemName = "15. 가운데 문자 출력(substring, substr)";

module.exports.testSet = [
  { input: ["study"], output: "u" },
  { input: ["good"], output: "oo" },
];

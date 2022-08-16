module.exports = function (...args) {
  const [word] = args;
  for (let i = 0; i < Math.ceil(word.length / 2); i += 1) {
    if (word[i].toLowerCase() !== word[word.length - 1 - i].toLowerCase()) {
      return "NO";
    }
  }
  return "YES";
};

module.exports.problemName = "1. 회문문자열";

module.exports.testSet = [
  { input: ["gooG"], output: "YES" },
  { input: ["gotG"], output: "NO" },
  { input: ["goooG"], output: "YES" },
];

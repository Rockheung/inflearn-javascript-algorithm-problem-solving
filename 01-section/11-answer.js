module.exports = function (...args) {
  const [word] = args;
  const upper_A_charCode = "A".charCodeAt();
  const upper_Z_charCode = "Z".charCodeAt();
  let count = 0;
  for (const char of word) {
    if (
      char.charCodeAt() > upper_A_charCode &&
      char.charCodeAt() < upper_Z_charCode
    ) {
      count += 1;
    }
  }
  return count;
};

module.exports.problemName = "11. 대문자 찾기";

module.exports.testSet = [{ input: ["KoreaTimeGood"], output: 3 }];

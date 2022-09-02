module.exports = function (...args) {
  const [[expression]] = args;
  const nums = [];
  for (const char of expression) {
    if (/^[0-9]$/.test(char)) {
      nums.push(Number(char))
    } else if (nums.length >= 2 && char === '+') {
      const a = nums.pop();
      const b = nums.pop();
      nums.push(b + a)
    } else if (nums.length >= 2 && char === '-') {
      const a = nums.pop();
      const b = nums.pop();
      nums.push(b - a)
    } else if (nums.length >= 2 && char === '*') {
      const a = nums.pop();
      const b = nums.pop();
      nums.push(b * a)
    } else if (nums.length >= 2 && char === '/') {
      const a = nums.pop();
      const b = nums.pop();
      nums.push(b / a)
    }
  }
  const [answer] = nums
  return answer;
};

module.exports.problemName = '4. 후위식 (postfix) 연산(스택)'

module.exports.testSet = [
  { input: [['352+*9-']], output: 12 }
];
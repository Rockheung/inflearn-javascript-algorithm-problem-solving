
module.exports = function (...args) {
  const [numberLength, numbers] = args;
  return numbers.filter((number, idx, numbers) => {
    if (idx === 0) return true;
    if (number > numbers[idx-1]) return true
  }).join(' ')
};

module.exports.problemName = '1. 큰 수 출력하기'

module.exports.testSet = [
  { input: [6,[7,3,9,5,6,12]], output: '7 9 6 12' }
];
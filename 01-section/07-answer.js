module.exports = function (...args) {
  const [firstDateChar, carNumbers] = args;
  return carNumbers.reduce((sum, num) => {
    if (Math.floor(num%10) === firstDateChar) {
      return sum += 1;
    }
    return sum
  }, 0)
};

module.exports.problemName = '7. 10부제'

module.exports.testSet = [
  // { input: [], output: 'answer' }
  { input: [3, [25, 23, 11, 47, 53, 17, 33]], output: 3 },
  { input: [0, [12, 20, 54, 30, 87, 91, 30]], output: 3 }
];
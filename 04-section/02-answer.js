
const flip = (num) => {
  const newNums = [];
  let newNum = 0;
  while(num) {
    newNums.push(num % 10)
    num = Math.floor(num / 10);
  }
  for (let i = 0; i < newNums.length; i += 1) {
    newNum += newNums[i] * 10 ** (newNums.length - 1 - i)
  }
  return newNum;
}

const isPrime = (num) => {
  if (num === 1) return false;
  if (num === 2 || num === 3) return true;
  for (let i = 2; i < Math.ceil(Math.sqrt(num)); i += 1) {
    if (num % i === 0) return false;
  }
  return true
}


module.exports = function (...args) {
  return args.map(flip).filter(isPrime).join(' ')
};

module.exports.problemName = '2. 뒤집은 소수'

module.exports.testSet = [
  { input: [32,55,62,20,250,370,200,30,100], output: '23 2 73 2 3' }
];


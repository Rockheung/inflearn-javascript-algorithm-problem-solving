module.exports = function (...args) {
  const [[n,k],sales] = args;
  let maximumSales = sales.slice(0,k).reduce((acc, sale) => acc + sale);
  let lastSum = maximumSales;

  for (let i = 1; i <= n - k; i += 1) {
    lastSum -= sales[i - 1];
    lastSum += sales[i + k - 1];
    maximumSales = Math.max(maximumSales, lastSum);
  }
  return maximumSales;
};


module.exports.problemName = '5. 최대 매출(Sliding Window)'

module.exports.testSet = [
  { input: [[10,3],[12,15,11,20,25,10,20,19,13,15]], output: 56 }
];
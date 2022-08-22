module.exports = function (...args) {
  const [[n,k], cards] = args
  const cardsSumObj = {}
  for (let i = 0; i < n; i += 1) {
    for (let j = i + 1; j < n; j += 1) {
      for (let k = j + 1; k < n; k += 1) {
        const sum = cards[i] + cards[j] + cards[k]
        cardsSumObj[sum] = true;
      }
    }
  }

  for (let s = 0, cnt = 0; s < 300; s += 1) {
    if (typeof cardsSumObj[300 - s] === 'undefined') continue;
    cnt += 1;
    if (k === cnt) return 300 - s;
  }
};

module.exports.problemName = '5. K번째 큰 수'

module.exports.testSet = [
  {
    input: [
      [10, 3],
      [13, 15, 34, 23, 45, 65, 33, 11, 26, 42],
    ],
    output: 143,
  },
];
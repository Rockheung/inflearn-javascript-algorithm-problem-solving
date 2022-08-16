module.exports = function (...args) {
  const [mat] = args;
  let hightestCount = 0;
  for (let i = 0; i < mat.length; i += 1) {
    for (let j = 0; j < mat.length; j += 1) {
      const top    = typeof mat[i-1]    === 'undefined' ? 0 : mat[i-1][j];
      const bottom = typeof mat[i+1]    === 'undefined' ? 0 : mat[i+1][j];
      const left   = typeof mat[i][j-1] === 'undefined' ? 0 : mat[i][j-1];
      const right  = typeof mat[i][j+1] === 'undefined' ? 0 : mat[i][j+1];
      if (mat[i][j] > Math.max(top, bottom, left, right)) {
        hightestCount += 1
      }
    }
  }
  return hightestCount;
};

module.exports.problemName = "7. 봉우리";

module.exports.testSet = [
  {
    input: [
      [
        [5, 3, 7, 2, 3],
        [3, 7, 1, 6, 1],
        [7, 2, 5, 3, 4],
        [4, 3, 6, 4, 1],
        [8, 7, 3, 5, 2],
      ],
    ],
    output: 10,
  },
];

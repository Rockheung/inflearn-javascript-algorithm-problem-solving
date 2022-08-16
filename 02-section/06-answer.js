module.exports = function (...args) {
  const [mat] = args;
  const matrixTransformed = tmax(mat);
  const maxSumByRow = Math.max(...mat.map((row) => sum(row)));
  const maxSumByCol = Math.max(...matrixTransformed.map((row) => sum(row)));
  const sum_0_0_n_n = mat
    .map((row, idx) => row.filter((item, jdx) => idx === jdx)[0])
    .reduce((acc, item) => acc + item);
  const sum_0_n_n_0 = mat
    .map((row, idx, mat) =>
      row.filter((item, jdx) => mat.length - 1 - idx === jdx)[0]
    )
    .reduce((acc, item) => acc + item);
  return Math.max(maxSumByRow, maxSumByCol, sum_0_0_n_n, sum_0_n_n_0);
};

module.exports.problemName = "6. 격자판 최대합";

module.exports.testSet = [{ input: [[
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
]], output: 155 }];


function sum(iter) {
  if (typeof iter[Symbol.iterator] === "undefined") throw new Error();
  const iterator = iter[Symbol.iterator]();
  let sumIter = 0;
  let isDone = false;
  while (!isDone) {
    sumIter += iterator.next().value;
    isDone = iterator.next().done;
  }
  return sumIter;
}

function tmax(matrix) {
  const n = matrix.length;
  const newMatrix = Array.from(new Array(n), () => new Array(n).fill(null));
  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < n; j += 1) {
      newMatrix[j][i] = matrix[i][j];
    }
  }
  return newMatrix;
}

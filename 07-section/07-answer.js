module.exports = function (...args) {
  const [[n],...coordinates] = args;
  const coordinatesSorted = [...coordinates].sort((a, b) =>
    a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]
  );
  return coordinatesSorted.map((coordinate) => coordinate.join(' ')).join('\n')
};

module.exports.problemName = '7. 좌표 정렬'

module.exports.testSet = [
  {
    input: [[5], [2, 7], [1, 3], [1, 2], [2, 5], [3, 6]],
    output: "1 2\n1 3\n2 5\n2 7\n3 6",
  },
];
module.exports = function (...args) {
  const [board, moves] = args;
  const popped = []
  let bomb = 0;
  for (let i = 0; i < moves.length; i += 1) {
    for (let j = 0; j < board.length; j += 1) {
      if (board[j][moves[i] - 1] === 0) continue;
      if (popped[popped.length - 1] === board[j][moves[i] - 1]) {
        popped.pop();
        bomb += 2
      } else {
        popped.push(board[j][moves[i] - 1]);
      }
      board[j][moves[i] - 1] = 0;
      break;
    }
  }
  return bomb;
};

module.exports.problemName = '3. 크레인 인형뽑기(스택):카카오'
// 4 (3 (1 1) 3) 2 4
module.exports.testSet = [
  {
    input: [
      [
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 3],
        [0, 2, 5, 0, 1],
        [4, 2, 4, 4, 2],
        [3, 5, 1, 3, 1],
      ],
      [1, 5, 3, 5, 1, 2, 1, 4],
    ],
    output: 4,
  },
];
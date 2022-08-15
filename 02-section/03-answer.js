module.exports = function (...args) {
  // 1: 가위, 2: 바위, 3: 보
  const [playCount, playerA, playerB] = args;
  const playResults = [];
  for (let i = 0; i < playCount; i += 1) {
    playResults.push(playJudge(playerA[i], playerB[i]))
  }
  return playResults.join('\n')
};

module.exports.problemName = '3. 가위바위보'

module.exports.testSet = [
  { input: [5, [2,3,3,1,3],[1,1,2,2,3]], output: 'A\nB\nA\nB\nD' }
];

function playJudge (a,b) {
  // 가위, 바위, 보,
  switch(a-b) {
    case -2: {
      // 13
      return 'A'
    }
    case -1: {
      // 12, 23
      return 'B'
    }
    case 0: {
      // 11,22,33
      return 'D'
    }
    case 1: {
      // 21, 32
      return 'A'
    }
    case 2: {
      // 31
      return 'B'
    }
    default: {
      throw new Error();
    }
  }
}
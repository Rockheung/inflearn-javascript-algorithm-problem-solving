module.exports.sol1 = function (...args) {
  const [[n, m], ...testResults] = args;

  const allCase = Array.from(new Array(n), (_, idx) =>
    Array.from(new Array(n), (_, jdx) => (jdx > idx) ? 1 : 0)
  );

  for (const testResult of testResults) {
    for (let i = 0; i < n; i += 1) {
      for (let j = i + 1; j < n; j += 1) {
        allCase[testResult[i]-1][testResult[j]-1] = 0;
      }
    }
  }
  
  const allCount = allCase.reduce(
    (sum, row) => sum + row.reduce((sumRow, count) => sumRow + count),
    0
  );

  return allCount;
};

module.exports = function (...args) {
  const [[n, m], ...testResults] = args;
  let mentoringGroup = 0;

  for (let mentor = 1; mentor <= n; mentor += 1) {
    for (let mentee = 1; mentee <= n; mentee += 1) {
      if (mentor === mentee) continue;
      let testWinCount = 0
      for (const testResult of testResults) {
        let mentorScoreOrder, menteeScoreOrder;
        for (let scoreOrder = 0; scoreOrder < n; scoreOrder += 1) {
          if (testResult[scoreOrder] === mentor) mentorScoreOrder = scoreOrder;
          else if (testResult[scoreOrder] === mentee) menteeScoreOrder = scoreOrder;
        }
        if (mentorScoreOrder < menteeScoreOrder) testWinCount += 1;
      }
      if (testWinCount === m) mentoringGroup += 1;
      testWinCount = 0;
    }
  }

  return mentoringGroup;
}

// 강의 코드
// 학생 두명을 골라서, 
// 학생 i번의 학생이 j번의 학생보다 모든 시험(cnt === m)에서
// 등수가 앞섰는지(pi < pj)를 확인하여
// 그 수를 세는(answer) 코드다.
// 말 그대로 모든 경우 따지기(brute-force).
module.exports._ = function (...test) {
  test = test.slice(1)
  let answer = 0;
  m = test.length;
  n = test[0].length;

  // i, j: 모든 학생의 1:1 관계 탐색. 반 번호
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      let cnt = 0;

      // k, s: test[][]의 모든 요소에서 등수 획득.
      // test[k][s]: s등의 학생의 반 번호
      for (let k = 0; k < m; k++) {
        // pi, pj: i, j 번호인 학생의 등수
        let pi = 0;
        let pj = 0;

        for (let s = 0; s < n; s++) {
          if (test[k][s] === i) pi = s;
          if (test[k][s] === j) pj = s;
        }
        if (pi < pj) cnt++;
      }
      if (cnt === m) answer++;
    }
  }
  return answer;
};

module.exports.problemName = "3. 멘토링";

module.exports.testSet = [
  { input: [
    [4, 3],
    [3, 4, 1, 2],
    [4, 3, 2, 1],
    [3, 1, 4, 2]
  ], output: 3 },
];

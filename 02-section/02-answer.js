module.exports = function (...args) {
  const [studentCount, students] = args;
  let tall = students[0]
  let visibleStudentCount = 1;
  for (let i = 1; i < studentCount; i += 1) {
    if (students[i] > tall) {
      visibleStudentCount += 1;
      tall = students[i];
    }
  }
  return visibleStudentCount;
};

module.exports.problemName = '2. 보이는 학생'

module.exports.testSet = [
  { input: [8, [130,135,148,140,145,150,150,153]], output: 5 }
];
module.exports = function (...args) {
  const [[n], ...times] = args;
  const minGapTimes = [...times].sort((a, b) =>
    a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]
  );

  const reservedTimes = [];
  for (const time of minGapTimes) {
    const isReservable = reservedTimes.every(
      (timeReserved) => timeReserved[1] <= time[0] || timeReserved[0] >= time[1]
    );
    if (isReservable) {
      reservedTimes.push(time);
    }
  }
  return reservedTimes.length;
};

module.exports.problemName = "8. 회의실 배정";

module.exports.testSet = [
  { input: [[5], [1, 4], [2, 3], [3, 5], [4, 6], [5, 7]], output: 3 },
  { input: [[3], [3, 3], [1, 3], [2, 3]], output: 2 },
];

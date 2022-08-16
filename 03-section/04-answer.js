module.exports = function (...args) {
  const [s, t] = args;
  const d = [];
  let dist = s.length
  for (const char of s) {
    if (char === t) dist = 0;
    else if (dist < s.length) dist += 1;
    d.push(dist);
  }
  dist = s.length;
  const sReversed = s.split('').reverse().join('');
  for (let j = 0; j < s.length; j += 1) {
    if (sReversed[j] === t) dist = 0;
    else if (dist < s.length) dist += 1;
    d[s.length - 1 - j] = d[s.length - 1 - j] > dist ? dist : d[s.length - 1 - j];
  }
  return d.join(' ')
};

module.exports.problemName = '4. 문자거리'

module.exports.testSet = [
  { input: ['teachermode','e'], output: '1 0 1 2 1 0 1 2 2 1 0' }
];
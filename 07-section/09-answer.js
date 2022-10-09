module.exports._ = function (...args) {
  const [[n],...friends] = args;
  let max = 0;
  for (let i = 0; i < 72; i += 1) {
    let maxMaybe = 0;
    for (let j = 0; j < friends.length; j += 1) {
      if (friends[j][0] <= i && friends[j][1] >= i+1) maxMaybe += 1
    }
    max = Math.max(max,maxMaybe)
  }
  return max;
};

module.exports.__ = function (...args) {
  const [[n],...friends] = args;
  let max = 0;
  let count  = 0;
  const times = friends.reduce((acc, time) => {
    return [...acc, {t: time[0], type: 1}, {t: time[1], type: -1}]
  }, []).sort((a,b) => {
    if (a.t === b.t) {
      return a.type - b.type 
    }
    return a.t - b.t
  })
  for (const time of times) {
    count += time.type;
    max = Math.max(max,count)
  }
  return max
}

module.exports = function (...args) {
  const [[n],friend, ...friends] = args;
  let max = 0;
  let count  = 0;
  const times = [
    { t: friend[0], type: 1 },
    { t: friend[1], type: -1 },
  ];
  for (const friend of friends) {
    for (let i = times.length - 1; i >= 0; i -= 1) {
      if (times[i].t < friend[0]) {
        times.splice(i+1, 0, { t: friend[0], type: 1 });
        break;
      } else if (times[i].t === friend[0] && times[i].type < 0) {
        times.splice(i+1, 0, { t: friend[0], type: 1 });
        break;
      }
      if (i === 0) {
        times.splice(0,0,{ t: friend[0], type: 1 })
      }
    }
    for (let i = times.length - 1; i >= 0; i -= 1) {
      if (times[i].t < friend[1]) {
        times.splice(i+1, 0, { t: friend[1], type: -1 });
        break;
      } else if (times[i].t === friend[1] && times[i].type < 0) {
        times.splice(i+1, 0, { t: friend[1], type: -1 });
        break;
      }
      if (i === 0) {
        times.splice(0,0,{ t: friend[1], type: -1 })
      }
    }
  }
  for (const time of times) {
    count += time.type;
    max = Math.max(max,count)
  }
  return max
}

module.exports.problemName = '9. 결혼식'

module.exports.testSet = [
  { input: [[5],[14,18],[12,15],[15,20],[20,30],[5,14]], output: 2 }
];
// static, O(n), but not not smart
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

// with sort method
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

// insertion sort
module.exports.___ = function (...args) {
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


// merge sort
module.exports = function (...args) {
  const [[n], ...friends] = args;
  const friendsWithEnterExit = friends.map((friend) => {
    return friend.map((time, idx) => {
      return {
        t: time,
        type: idx === 0 ? 1 : -1
      }
    })
  })
  let max = 0;
  let count  = 0;

  function merge(arrA, arrB = []) {
    let arr = [];
    let i = 0, j = 0;
    while(i < arrA.length && j < arrB.length) {
      if (arrA[i].t > arrB[j].t) {
        arr.push(arrB[j])
        j += 1;
      } else if (arrA[i].t === arrB[j].t){
        if (arrA[i].type > arrB[j].type) {
          arr.push(arrB[j]);
          j += 1;
        } else {
          arr.push(arrA[i]);
          i += 1;
        }
      } else {
        arr.push(arrA[i])
        i += 1;
      }
    }
    if (i === arrA.length) {
      arrB.slice(j).reduce((arr, itemB)=> {arr.push(itemB); return arr}, arr)
    }
    if (j === arrB.length) {
      arrA.slice(i).reduce((arr, itemA)=> {arr.push(itemA); return arr}, arr)
    }
    return arr
  }
  let arr = [...friendsWithEnterExit]
  while (arr.length > 1) {
    let _tmpArr = [];
    for (let i = 0; i < arr.length; i += 2) {
      _tmpArr.push(merge(arr[i], arr[i+1]))
    }
    arr = _tmpArr
  }
  for (const time of arr[0]) {
    count += time.type;
    max = Math.max(max,count)
  }
  return max
}

module.exports.problemName = '9. 결혼식'

module.exports.testSet = [
  { input: [[5],[14,18],[12,15],[15,20],[20,30],[5,14]], output: 2 }
];
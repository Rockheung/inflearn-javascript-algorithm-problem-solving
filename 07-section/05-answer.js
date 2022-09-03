module.exports = function (...args) {
  const [[s, n],works] = args;
  const cache = new Array(s).fill(0);
  for (let i = 0; i < n; i += 1) {
    // 캐시에 없을 경우 || 키워드로 초기화하기 위해 idx + 1로 처리
    let k = cache.indexOf(works[i]) + 1 || s - 1;
    for (let j = 0; j < s; j += 1) {
      if (cache[j] === works[i]) {
        k = j;
      }
    }
    for (; k >= 1; k -= 1) {
      cache[k] = cache[k-1];
    }
    cache[0] = works[i];
  }
  return cache.join(' ')
};

module.exports.problemName = '5. LRU(카카오 캐시 변형 : 삽입정렬응용)'

module.exports.testSet = [
  { input: [[5,9],[1,2,3,2,6,2,3,5,7]], output: '7 5 3 2 6' }
];
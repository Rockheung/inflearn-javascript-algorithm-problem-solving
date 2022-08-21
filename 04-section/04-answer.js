module.exports = function (...args) {
  const [[n, m], ...giftsWithPrice] = args;
  let maxGiftsCount = 0;
  const giftsSorted = giftsWithPrice.sort(
    (giftA, giftB) => giftA[0] + giftA[1] - giftB[0] - giftB[1]
  );
  for (let discountedIdx = 0; discountedIdx < n; discountedIdx += 1) {
    // 무조건 한 개의 선물을 일단 살 것이므로 해당 상품 반값으로 미리 합산.
    let giftsCount = 1;
    let restPrice = m - giftsSorted[discountedIdx][0] / 2 - giftsSorted[discountedIdx][1];
    for (let i = 0; i < n; i += 1) {
      // 남은 돈으로 순회, 이미 산 상품은 제낌.
      if (i === discountedIdx) continue;
      if (restPrice - giftsSorted[i][0] - giftsSorted[i][1] < 0) {
        break;
      }
      // 산 상품 갯수
      giftsCount += 1;
      restPrice -= giftsSorted[i][0] + giftsSorted[i][1];
    }
    maxGiftsCount = Math.max(maxGiftsCount, giftsCount);
  }
  return maxGiftsCount;
};

module.exports.problemName = '4. 졸업선물'

module.exports.testSet = [
  {
    input: [
      [5, 28],
      [6, 6],
      [2, 2],
      [4, 3],
      [4, 5],
      [10, 3],
    ],
    output: 4,
  },
];
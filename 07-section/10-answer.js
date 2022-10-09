module.exports = function (...args) {
  const [[n,m],nums] = args;
  const numsSorted = nums.sort((a,b) => a-b);
  let lt = 0;
  let rt = numsSorted.length - 1;

  while(lt + 1 < rt) {
    let mid = Math.floor((lt + rt)/2)
    if (numsSorted[mid] > m) {
      rt = mid 
    } else {
      lt = mid 
    }
  }
  console.log(lt, rt)
  return Math.floor((lt+ rt)/2) + 1;
};

module.exports.problemName = '10. 이분검색'

module.exports.testSet = [
  { input: [[8,32],[23,87,65,12,57,32,99,81]], output: 3 },
  { input: [[7,32],[23,87,65,57,32,99,81]], output: 2 }
];
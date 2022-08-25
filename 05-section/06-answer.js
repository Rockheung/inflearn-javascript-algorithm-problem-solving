module.exports = function (...args) {
  const [[n],[votes]] = args;
  const votesResults = {
    A:0,B:0,C:0,D:0,E:0
  };
  let capNum, capVotes = 0;
  for (const vote of votes) {
    votesResults[vote] += 1;
    if (votesResults[vote] > capVotes) {
      capNum = vote;
      capVotes = votesResults[vote];
    }
  }
  return capNum;
};

module.exports.problemName = '6. 학급 회장(Hash Map)'

module.exports.testSet = [
  { input: [[15],['BACBACCACCBDEDE']], output: 'C' }
];
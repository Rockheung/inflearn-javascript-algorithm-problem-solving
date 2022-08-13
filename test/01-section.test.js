const { expect } = require("chai");
const answers = [
  require("../01-section/01-answer"),
  require("../01-section/02-answer"),
  require("../01-section/03-answer"),
];

describe("01-section", () => {
  for (const answer of answers) {
    const { problemName, testSet } = answer;
    it(problemName, () => {
      for (const { input, output } of testSet) {
        expect(answer(...input)).to.equal(output);
      }
    });
  }
});

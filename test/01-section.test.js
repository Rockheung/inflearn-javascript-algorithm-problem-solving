const { expect } = require("chai");
const answer_01 = require("../01-section/01-answer");


describe("01-section", () => {
  it("1. 세 수 중 최솟값", () => {
    for (const { input, output } of answer_01.testSet) {
      expect(answer_01(...input)).to.equal(output);
    }
  });
});

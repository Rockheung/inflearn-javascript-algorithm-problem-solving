const { assert, should, expect } = require("chai");
const answer_01 = require("../01-section/01-answer");

describe("01-section", () => {
  it("1. 세 수 중 최솟값", () => {
    expect(answer_01([6, 5, 11])).to.equal(5)
  });
});

const { expect } = require("chai");
const fs = require('fs');
const path = require('path')
const files = fs.readdirSync(path.join(__dirname, '../02-section'));
const answers = files.map((file) => {
  return require(path.join('../02-section', file))
})

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

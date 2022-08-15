const { expect } = require("chai");
const fs = require("fs");
const path = require("path");
const sectionPaths = fs
  .readdirSync(".")
  .filter((pathName) => /^\d{2}-section$/.test(pathName));

for (const sectionPath of sectionPaths) {
  const files = fs.readdirSync(sectionPath);
  const answers = files.map((file) => {
    return require(path.join("../" + sectionPath, file));
  });

  describe(sectionPath, () => {
    for (const answer of answers) {
      const { problemName, testSet } = answer;
      it(problemName, () => {
        for (const { input, output } of testSet) {
          expect(answer(...input)).to.equal(output);
        }
      });
    }
  });
}

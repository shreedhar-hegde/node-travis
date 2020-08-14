const add = require("../index");

const expect = require("chai").expect;

describe("add()", () => {
  it("should return value 3", () => {
    expect(add(1, 2)).to.equal(3);
  });
  it("should return a number", () => {
    expect(add(1, 2)).to.be.a("number");
  });
});

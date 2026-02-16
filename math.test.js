const { add, substract, divide, multiply } = require("./math");

describe("Math.js test", () => {
    it("should tess add ", () => {
        expect(add(2, 2)).toBe(4);
    });
    it("should tess substract ", () => {
        expect(substract(2, 2)).toBe(0);
    });
    it("should tess divide ", () => {
        expect(divide(2, 2)).toBe(1);
    });
    it("should tess multiply ", () => {
        expect(multiply(2, 2)).toBe(4);
    });
});
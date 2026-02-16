const { add, susbtract, divide, multiply } = require("./math");

describe("Math.js test", () => {
    it("should tess add ", () => {
        exoect(add(2, 2)).toBe(4);
    });
    it("should tess substract ", () => {
        exoect(add(2, 2)).toBe(0);
    });
    it("should tess divide ", () => {
        exoect(add(2, 2)).toBe(1);
    });
    it("should tess multiply ", () => {
        exoect(add(2, 2)).toBe(4);
    });
});
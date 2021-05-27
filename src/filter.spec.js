const filter = require('./filter');

const keepElement = (x) => true;

const discardElement = (x) => false;

describe("Filter", () => {
    it("Filter returns empty array if an empty array is given", () => {
        expect(filter([], keepElement)).toEqual([]);
    });

    it("Filter returns same array if the given function returns only true", () => {
        expect(filter([1, 2, 3, 4], keepElement)).toEqual([1, 2, 3, 4]);
    });

    it("Filter returns empty array if the given function returns only false", () => {
        expect(filter([1, 2, 3, 4], discardElement)).toEqual([]);
    });

    it("Filter returns all the values that passed the given condition", () => {
        const returnGreaterThanOne = (x) => x > 1;
        expect(filter([1, 2, 3, 4], returnGreaterThanOne)).toEqual([2, 3, 4]);
    });

})
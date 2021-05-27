const map = require('./map');

const cube = (element) => element ** 3;

const identity = (element) => element;

describe('Map', () => {

    it('Map returns empty array when an empty array and a mapper function are given', () => {
        expect(map([], cube)).toEqual([]);
    });

    it('Map returns array with cube of elements when non-empty array and a cube function are given', () => {
        expect(map([1, 2, 3], cube)).toEqual([1, 8, 27]);
    });

    it('Map returns the exact same array when non-empty array and a identity function are given', () => {
        expect(map([1, 2, 3, 4], identity)).toEqual([1, 2, 3, 4]);
    });

})
const tail = require('./tail');

describe('Tail', () => {

    it('Tail of non-empty array returns elements except the first element of the array', () => {
        expect(tail([1,2,3])).toEqual([2,3]);
    });

    it('Tail of empty array is []]', () => {
        expect(tail([])).toEqual([]);
    });

})
const head = require('./head');

describe('Head', () => {

    it('Head of non-empty array is first element of the array', () => {
        expect(head([1,2])).toEqual(1);
    });

    it('Head of empty array is undefined', () => {
        expect(head([])).toEqual(undefined);
    });

})

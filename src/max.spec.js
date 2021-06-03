const max = require('./max');

describe('Max', () => {

    it('Max of non-empty array is maximum element in the array', () => {
        expect(max([1,2,3,4,5])).toEqual(5);
    });

    it('Max of empty array is undefined', () => {
        expect(max([])).toEqual(undefined);
    });

    it('Max of non-empty array with mix of negative numbers is maximum element in the array', () => {
        expect(max([-1,2,-3,4,-5])).toEqual(4);
    });

    it('Max of non-empty array with only negative numbers is maximum element in the array', () => {
        expect(max([-1,-2,-3,-4,-5])).toEqual(-1);
    });

})
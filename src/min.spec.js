const min = require('./min');

describe('Min', () => {

    it('Min of non-empty array is minimum element in the array', () => {
        expect(min([1,2,3,4,5])).toEqual(1);
    });

    it('Min of empty array is undefined', () => {
        expect(min([])).toEqual(undefined);
    });

})

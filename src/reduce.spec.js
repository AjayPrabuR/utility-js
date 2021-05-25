const reduce = require('./reduce');
const add = require('./add');

describe('Reduce', () => {

    it('Reduce returns undefined when empty array, add as reducer function and no initial value are given with ', () => {
        expect(reduce([], add)).toEqual(undefined);
    });

    it('Reduce returns initial value when empty array, add as reducer function and initial value are given', () => {
        expect(reduce([], add, 10)).toEqual(10);
    });

    it('Reduce returns reduced value when non-empty array, add as reducer function and no initial value are given', () => {
        expect(reduce(['a','b','c', 'd'], add)).toEqual('abcd');
    });

    it('Reduce returns reduced value along with initial value when non-empty array, add as reducer function and initial value are given', () => {
        expect(reduce(['a','b','c'], add, 'z')).toEqual('zabc');
    });

 })
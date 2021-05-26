const reduce = require('./reduce');

const min = (array) => {
    return reduce(array, getMinimum);
}

const getMinimum = (previousElement, currentElement) => {
    return previousElement < currentElement ? previousElement : currentElement;
}

module.exports = min;
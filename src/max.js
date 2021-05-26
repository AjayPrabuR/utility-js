const reduce = require('./reduce');

const max = (array) => {
    return reduce(array, getMaximum);
}

const getMaximum = (previousElement, currentElement) => {
    return previousElement > currentElement ? previousElement : currentElement;
}

module.exports = max;
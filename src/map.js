const head = require('./head');
const tail = require('./tail');

const map = (array, mappingFunction, mapped = []) => {
    if(array.length === 0)
        return mapped;
    const mappedHead = mappingFunction(head(array));
    mapped.push(mappedHead);
    return map(tail(array), mappingFunction, mapped)
}

module.exports = map
const head = require('./head');
const tail = require('./tail');

const filter = (array, condition, filtered = []) => {
    if(array.length === 0)
        return filtered;
    const filteredHead = head(array);
    if(condition(filteredHead)) {
        filtered.push(filteredHead);
    }
    return filter(tail(array), condition, filtered)
}

module.exports = filter
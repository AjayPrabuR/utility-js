const tail = require('./tail')
const head = require('./head')

const reduce = (array, reducerFunction, initialValue) =>  {
    if(array.length == 0)
        return initialValue;

    if(initialValue === undefined)
            return reduce(tail(array), reducerFunction, head(array));

    const currentHead = head(array);
    const reducedArray = tail(array);
    const currentInitialValue = reducerFunction(initialValue,currentHead);

    return reduce(reducedArray, reducerFunction, currentInitialValue)
 }

module.exports = reduce;
var slicedArray = [];

const slice = (startIndex, endIndex) => {
    const array = this;
    var stopIndex = array.length - 1;
    if (startIndex === undefined) {
        return slicedArray;
    }
    if (startIndex< 0)
        startIndex = startIndex+ array.length;
    if (endIndex !== undefined && endIndex > 0) {
        stopIndex = endIndex - 1;
    }
    slicedArray.push(array[startIndex]);
    this.slice(startIndex + 1);

    return slicedArray;
}

module.exports = slice
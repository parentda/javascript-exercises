const removeFromArray = function(array, ...theArgs) {
    let arrayLen = array.length;
    let theArgsLen = theArgs.length;

    let removed;

    for (i = (arrayLen - 1); i >= 0; i--) {
        for (j = 0; j < theArgsLen; j++) {
            if (array[i] === theArgs[j]) {
                removed = array.splice(i, 1);
                console.log(array);
                console.log(removed);
            }
        }
    }

    return array;
}

module.exports = removeFromArray

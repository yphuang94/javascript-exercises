const removeFromArray = function(array,number) {
    let includedArray = [];
    for (each of array) {
        if (each != number) {
            includedArray.push(each);
        }
    }
    return includedArray;
}

// Do not edit below this line
module.exports = removeFromArray;

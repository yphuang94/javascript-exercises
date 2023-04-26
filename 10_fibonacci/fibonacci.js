const fibonacci = function(number) {
    let fibArray = [0, 1, 1];
    let lastValue = 0;
    let errorMsg = "OOPS";

    if (number > 0) {
        for (i = 3; i <= number; i++) {
            lastValue = parseInt(fibArray[fibArray.length - 1]) + parseInt(fibArray[fibArray.length - 2]);
            fibArray.push(lastValue);
        }
    } else {
        return errorMsg;
    }
    
    return parseInt(fibArray[fibArray.length - 1]);
};

// Do not edit below this line
module.exports = fibonacci;

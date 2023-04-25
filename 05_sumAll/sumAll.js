const sumAll = function(number1, number2) {
    let finalSum = 0;
    if (typeof number2 != "number" ) {
        finalSum = "ERROR";
    } else if (number1 < 0) {
        finalSum = "ERROR";
    } else if (number1 < number2) {
        for (i = number1; i <= number2; i++) {
            finalSum += i;
        }
    } else {
        for (i = number2; i <= number1; i++) {
            finalSum += i;
        }
    }

    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;

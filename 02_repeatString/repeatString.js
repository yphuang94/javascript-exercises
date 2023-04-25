const repeatString = function(message, num) {
    let repeatString = "";
    if (parseInt(num) < 0) {
        repeatString = "ERROR";
    } else if (parseInt(num) == 0) {
        repeatString = "";
    } else {
        for (i = 0; i < num; i++) {
            repeatString += message;
        }
    }
    return repeatString;
};

// Do not edit below this line
module.exports = repeatString;

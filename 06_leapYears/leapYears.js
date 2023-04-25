const leapYears = function(number) {
    let leapYear = "";
    if (number % 400 == 0) {
        leapYear = true;
    } else if (number % 100 != 0 && number % 4 == 0) {
        leapYear = true;
    } else {
        leapYear = false;
    }

    return leapYear;
};

// Do not edit below this line
module.exports = leapYears;

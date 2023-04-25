const reverseString = function(string) {
    const statement = Object.assign([], string);
    let reverseStatement = statement.reverse();
    return reverseStatement.join("");
};

// Do not edit below this line
module.exports = reverseString;

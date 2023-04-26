const palindromes = function (string) {
    let stringArray = string.split("");
    let reversedString = stringArray.reverse();
    let concatArray = reversedString.join("");
    let finalString = concatArray.replace(/[123456789.,\/#!$%\^&\*;: {}=\-_`~()]/g,"");
    let updatedString = string.replace(/[123456789.,\/#!$%\^&\*;: {}=\-_`~()]/g,"");
    
    if(finalString.toLowerCase() == updatedString.toLowerCase()) {
        return true;
    } return false;
};

// Do not edit below this line
module.exports = palindromes;

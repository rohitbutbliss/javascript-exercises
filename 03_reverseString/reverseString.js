const reverseString = function (string) {
    let newString = "";
    let origStringLength = string.length;
    for (let i = origStringLength - 1; i >= 0; i--) newString = newString + string[i];
    return newString;
};

// Do not edit below this line
module.exports = reverseString;

const palindromes = function (string) {
    string = string.toLowerCase();
    let forwardString = "";
    let backwardString = "";
    for (let i = 0; i < string.length; i++) {
        if ((string[i] >= '0' && string[i] <= '9') || (string[i] >= 'a' && string[i] <= 'z'))
            forwardString += string[i];
    }

    for (let i = forwardString.length - 1; i >= 0; i--) {
        backwardString += forwardString[i];
    }


    return backwardString === forwardString;
};

// Do not edit below this line
module.exports = palindromes;

const sumAll = function (firstNumber, secondNumber) {
    if (typeof firstNumber !== "number" || typeof secondNumber !== "number") return "ERROR";
    if (firstNumber < 0 || secondNumber < 0) return "ERROR";

    let sum = 0;
    let smallerNumber = firstNumber > secondNumber ? secondNumber : firstNumber;
    let biggerNumber = firstNumber > secondNumber ? firstNumber : secondNumber;

    for (let i = smallerNumber; i <= biggerNumber; i++)
        sum += i;

    return sum;
};

// Do not edit below this line
module.exports = sumAll;

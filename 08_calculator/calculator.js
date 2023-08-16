const add = function (firstNumber, secondNumber) {
  return firstNumber + secondNumber;
};

const subtract = function (firstNumber, secondNumber) {
  return firstNumber - secondNumber;
};

const sum = function (intArray) {
  return intArray.reduce((sum, element) => { return sum + element; }, 0);
};

const multiply = function (numberArray) {
  return numberArray.reduce((product, element) => { return product * element; }, 1);
};

const power = function (number, power) {
  return number ** power;
};

const factorial = function (number) {
  let factorialOfNumber = 1;
  for (let i = 1; i <= number; i++) factorialOfNumber *= i;
  return factorialOfNumber;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

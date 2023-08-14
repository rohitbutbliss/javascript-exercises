const add = function (firstNumber, secondNumber) {
  return firstNumber + secondNumber;
};

const subtract = function (firstNumber, secondNumber) {
  return firstNumber - secondNumber;
};

const sum = function (intArray) {
  let sumOfArray = 0;
  for (let i = 0; i < intArray.length; i++) sumOfArray += intArray[i];
  return sumOfArray;
};

const multiply = function (numberArray) {
  let productOfArray = 1;
  for (let i = 0; i < numberArray.length; i++) productOfArray *= numberArray[i];
  return productOfArray;
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

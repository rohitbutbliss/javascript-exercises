const fibonacci = function (nthTerm) {
    if (nthTerm <= 0) return "OOPS";

    let firstFibonacciNumber = 1;
    let secondFibonacciNumber = 1;

    if (nthTerm === 1 || nthTerm === 2) return 1;
    for (let i = 2; i < nthTerm; i++) {
        let temp = secondFibonacciNumber;
        secondFibonacciNumber += firstFibonacciNumber;
        firstFibonacciNumber = temp;
    }

    return secondFibonacciNumber;
};

// Do not edit below this line
module.exports = fibonacci;

const removeFromArray = function (intArray, ...elementsToBeRemoved) {
    return intArray.filter(element => !elementsToBeRemoved.includes(element));
};

removeFromArray([1, 2, 3, 4], 3);

// Do not edit below this line
module.exports = removeFromArray;

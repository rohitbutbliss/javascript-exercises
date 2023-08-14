const removeFromArray = function (intArray, ...elementsToBeRemoved) {
    for (let i = 0; i < elementsToBeRemoved.length; i++) for (let j = 0; j < intArray.length; j++) {
        if (intArray[j] === elementsToBeRemoved[i]) intArray.splice(j, 1);
    }
    return intArray;
};

removeFromArray([1, 2, 3, 4], 3);

// Do not edit below this line
module.exports = removeFromArray;

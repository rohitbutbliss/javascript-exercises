const findTheOldest = function (peopleArray) {
    return peopleArray.reduce((oldestPerson, currentPerson) => {
        return ((oldestPerson.yearOfDeath || new Date().getFullYear()) - oldestPerson.yearOfBirth) < ((currentPerson.yearOfDeath || new Date().getFullYear()) - currentPerson.yearOfBirth) ? currentPerson : oldestPerson;
    });
};

// Do not edit below this line
module.exports = findTheOldest;

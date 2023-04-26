const findTheOldest = function(people) {
    for (each of people) {
        each.age = (each.yearOfDeath - each.yearOfBirth);
    }
    
    let highestAge = 0;
    let oldestPerson = "";
    for (person of people) {
        if (person.age > highestAge) {
            highestAge = person.age;
            oldestPerson = person.name;
        }
    }

    return oldestPerson;
    
};

// Do not edit below this line
module.exports = findTheOldest;

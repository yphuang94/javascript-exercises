const findTheOldest = function(individuals) {
   
    /* returns undefined - this worked the whole time! We just needed to return the index, not the name.
    for (each of individuals) {
        each.age = (each.yearOfDeath - each.yearOfBirth);
    }
    
    let highestAge = 0;
    let oldestPerson = "";
    for (person of individuals) {
        if (person.age > highestAge) {
            highestAge = person.age;
            oldestPerson = person.name;
        }
    }
    return oldestPerson;
    */

    /* returns undefined - need to call people.name?
    let peopleAge = 0;
    let peopleName = "";
            
    for (each of individuals) {
        if ((each.yearOfDeath - each.yearOfBirth) > peopleAge) {
            peopleAge = each.yearOfDeath - each.yearOfBirth;
            peopleName = each.name;
        };
    }
    return peopleName;
    */

    let index = 0;
    let highestAge = 0;

    for (each of individuals) {
        if ((each.yearOfDeath - each.yearOfBirth) > highestAge) {
            highestAge = (each.yearOfDeath - each.yearOfBirth);
            index = individuals.indexOf(each);
        }
    }
    return individuals[index];
    
};

// Do not edit below this line
module.exports = findTheOldest;

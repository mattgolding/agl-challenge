$(document).ready(function() {
    serverMoch.runRequest('http://agl-developer-test.azurewebsites.net/people.json', onLoadDataSuccess);
});

function onLoadDataSuccess(data) {
    // populate the people objects
    var people = [];
    data.forEach(function (personData) {
        var person = new Person(personData);

        people.push(person);
    });

    // get two lists one for female and one for male
    var males = getPeopleByGender(people, AGL.genders.male);
    var females = getPeopleByGender(people, AGL.genders.female);

    // call the helper function as we do duplicate things inside for male and female
    writeOutGenderPetNames(males, AGL.animalTypes.cat, '.male-owned-pets');
    writeOutGenderPetNames(females, AGL.animalTypes.cat, '.female-owned-pets');
}

// Helper function for handling duplicate code
function writeOutGenderPetNames (peopleList, animalType, domSelector) {
    var pets = [];

    // loop through the person list
    peopleList.forEach(function (person) {
        // try and get back any pets that match our desired animal type
        var personsPets = getAnimalsByType(person.getPets(), animalType);

        // merge the pets for this person with other pets we found for other people
        pets = mergeTwoArrays(pets, personsPets);
    });

    var sorted = sortByName(pets);

    sorted.forEach(function (animal) {
        $(domSelector).append('<li>'+animal.getName()+'</li>');
    });
}
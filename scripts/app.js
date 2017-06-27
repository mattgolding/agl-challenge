$(document).ready(function() {
    // get the info from ajax server
    $.ajax({
        url: 'http://agl-developer-test.azurewebsites.net/people.json',
        dataType: 'jsonp', // jsonp for cross site domain
        success: onLoadDataSuccess
    });
});

function onLoadDataSuccess(data) {
    // populate the people objects
    var people = [];
    data.forEach(function (personData) {
        var person = new Person(personData);

        people.push(person);
    });

    // get two lists one for female and one for male
    var males = getPeopleByGender(people, 'male');
    var females = getPeopleByGender(people, 'female');

    // call the helper function as we do duplicate things inside for male and female
    writeOutGenderPetNames(males, 'cat', '.male-owned-pets');
    writeOutGenderPetNames(females, 'cat', '.female-owned-pets');
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
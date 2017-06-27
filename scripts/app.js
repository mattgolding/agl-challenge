$(document).ready(function() {
    // get the info from ajax server
    var json = [{"name":"Bob","gender":"Male","age":23,"pets":[{"name":"Garfield","type":"Cat"},{"name":"Fido","type":"Dog"}]},{"name":"Jennifer","gender":"Female","age":18,"pets":[{"name":"Garfield","type":"Cat"}]},{"name":"Steve","gender":"Male","age":45,"pets":null},{"name":"Fred","gender":"Male","age":40,"pets":[{"name":"Tom","type":"Cat"},{"name":"Max","type":"Cat"},{"name":"Sam","type":"Dog"},{"name":"Jim","type":"Cat"}]},{"name":"Samantha","gender":"Female","age":40,"pets":[{"name":"Tabby","type":"Cat"}]},{"name":"Alice","gender":"Female","age":64,"pets":[{"name":"Simba","type":"Cat"},{"name":"Nemo","type":"Fish"}]}];

    // populate the objects
    var people = [];
    json.forEach(function (personData) {
        var person = new Person(personData);

        people.push(person);
    });

    // get two lists one for female and one for male
    var males = getPeopleByGender(people, 'Male');
    var females = getPeopleByGender(people, 'Female');

    // call the helper function as we do duplicate things inside for male and female
    writeOutGenderPetNames(males, 'cat', '.male-owned-pets');
    writeOutGenderPetNames(females, 'cat', '.female-owned-pets');
});

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
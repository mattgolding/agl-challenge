function sortByName(array) {
    return _.sortBy(array, [function (person) {
        return person.getName();
    }]);
}

function getPeopleByGender(array, gender) {
    return _.filter(array, function (person) {
        return person.getGender() === gender;
    });
}

// function getPersonWithAnimalType(array, animalType) {
//     return _.filter(array, function (person) {
//         var pets = person.getPets(),
//             hasCat = false;

//         pets.forEach(function(pet) {
//             if (pet.getType() === animalType) {
//                 hasCat = true;
//             }
//         }, this);

//         return hasCat;
//     });
// }

function getAnimalsByType(petsArray, animalType) {
    return _.filter(petsArray, function (pet) {
        if (pet.getType().toLowerCase() === animalType) {
            return true;
        }
    });
}

function mergeTwoArrays(array1, array2) {
    return _.concat(array1, array2);
}
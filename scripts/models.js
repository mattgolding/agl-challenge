function Person (personData) {
    var json = personData;

    var name = personData.name;
    var gender = personData.gender;
    var age = personData.age;

    var pets = [];
    if (personData.pets !== null) {
        personData.pets.forEach(function(petData) {
            var pet = new Pet(petData);

            pets.push(pet);
        }, this);
    }
    

    return {
        getName: function () {
            return name;
        },
        getGender: function () {
            return gender;
        },
        getAge: function () {
            return age;
        },
        getPets: function () {
            return pets;
        }
    };
}

function Pet (data) {
    var petData = data;

    var name = data.name;
    var type = data.type;

    return {
        getName: function () {
            return name;
        },
        getType: function () {
            return type;
        }
    };
}
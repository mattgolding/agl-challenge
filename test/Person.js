var expect = chai.expect;

describe('Person Testing', function () {
    describe('creating a Person model', function () {
        it('should create an empty person model', function () {
            var person = new Person();

            expect(person.getName()).to.equal(undefined);
            expect(person.getAge()).to.equal(undefined);
            expect(person.getGender()).to.equal(undefined);
        });

        it('should create a person model', function () {
            var mockData = {
                name:"Bob",
                gender:"Male",
                age:23,
                pets:[
                    {
                        name:"Garfield",
                        type:"Cat"
                    },
                    {
                        name:"Fido",
                        type:"Dog"
                    }
                ]
            };

            var person = new Person(mockData);

            expect(person.getName()).to.equal(mockData.name);
            expect(person.getAge()).to.equal(mockData.age);
            expect(person.getGender()).to.equal(mockData.gender);
            expect(person.getPets().length).to.equal(mockData.pets.length);
        });
    });
});
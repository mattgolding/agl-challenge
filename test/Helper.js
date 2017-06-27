var expect = chai.expect;

describe('Helper Testing', function () {
    var mockData = [
        new Person({"name":"Jennifer","gender":"Female","age":18,"pets":[{"name":"Garfield","type":"Cat"}]}),
        new Person({"name":"Steve","gender":"Male","age":45,"pets":null}),
        new Person({"name":"Fred","gender":"Male","age":40,"pets":[{"name":"Tom","type":"Cat"},{"name":"Max","type":"Cat"},{"name":"Sam","type":"Dog"},{"name":"Jim","type":"Cat"}]}),
        new Person({"name":"Alice","gender":"Female","age":64,"pets":[{"name":"Simba","type":"Cat"},{"name":"Nemo","type":"Fish"}]})
    ];

    describe('sortByName', function () {
        it('sort the Persons by name', function () {
            var peopleSorted = sortByName(mockData);

            expect(peopleSorted[0].getName()).to.equal('Alice');
            expect(peopleSorted[1].getName()).to.equal('Fred');
            expect(peopleSorted[2].getName()).to.equal('Jennifer');
            expect(peopleSorted[3].getName()).to.equal('Steve');
        });
    });

    describe('getPeopleByGender', function () {
        it('return only male users', function () {
            var males = getPeopleByGender(mockData, 'male');

            expect(males.length).to.equal(2);
            expect(males[0].getName()).to.equal('Steve');
            expect(males[1].getName()).to.equal('Fred');
        });

        it('return only female users', function () {
            var females = getPeopleByGender(mockData, 'female');

            expect(females.length).to.equal(2);
            expect(females[0].getName()).to.equal('Jennifer');
            expect(females[1].getName()).to.equal('Alice');
        });
    });

    describe('getAnimalsByType', function () {
        it('should return all the dogs', function () {
            var mockPets = [
                new Pet({"name":"Tom","type":"Cat"}),
                new Pet({"name":"Max","type":"Cat"}),
                new Pet({"name":"Sam","type":"Dog"}),
                new Pet({"name":"Jim","type":"Cat"})
            ];

            var pets = getAnimalsByType(mockPets, 'dog');

            expect(pets.length).to.equal(1);
            expect(pets[0].getName()).to.equal("Sam");
        });
    });
});
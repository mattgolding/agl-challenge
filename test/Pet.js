var expect = chai.expect;

describe('Pet Testing', function () {
    describe('creating a Pet model', function () {
        it('should create an empty pet model', function () {
            var pet = new Pet();

            expect(pet.getName()).to.equal(undefined);
            expect(pet.getType()).to.equal(undefined);
        });

        it('should create a pet model', function () {
            var mockData = {
                name:"Garfield",
                type:"Cat"
            };

            var pet = new Pet(mockData);

            expect(pet.getName()).to.equal(mockData.name);
            expect(pet.getType()).to.equal(mockData.type);
        });
    });
});
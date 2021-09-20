class Person {

    constructor (firsrName,lastName,age,heightInInches,weight) {
        this.name.first = firsrName;
        this.name.last = lastName;
        this.age = age;
        this.height = heightInInches;
        this.weight = weight;
    }

    name = {}

    printBmi = () => console.log(`${this.name.first} ${this.name.last}'s BMI is ~` + this.getBmi());

    getBmi = () => Math.round((this.weight/Math.pow(this.height,2)) * 703);
}

module.exports = Person;
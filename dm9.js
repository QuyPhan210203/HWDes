class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    displayInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

const person1 = new Person("Alice", 30);
const person2 = new Person("Bob", 25);

person1.displayInfo();
person2.displayInfo();

person2.name ="Mr Dinh";
console.log(person2.name);
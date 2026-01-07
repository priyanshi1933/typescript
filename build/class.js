"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    name;
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
const person = new Person("Priyanshi");
console.log(person.getName());
//parameter properties
class Car {
    color;
    constructor(color) {
        this.color = color;
    }
    getColor() {
        return this.color;
    }
}
const car = new Car("Red");
console.log(car.getColor());
class Rectangle {
    width;
    height;
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}
class Square extends Rectangle {
    constructor(width) {
        super(width, width);
    }
}
const sq = new Square(20);
console.log(sq.getArea());
//# sourceMappingURL=class.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getTime() {
    return new Date().getTime();
}
console.log(getTime());
//void return type
function printHello() {
    console.log("Hello");
}
printHello();
//parameters
function multiply(a, b) {
    return a * b;
}
console.log(multiply(2, 5));
//optional parameter
function sum(x, y, z) {
    return x + y + (z || 0);
}
console.log(sum(7, 8));
//default parameter
function pow(value, exponent = 10) {
    return value ** exponent;
}
console.log(pow(10));
//anonymous function
const sub = function (x, y) {
    return x - y;
};
console.log(sub(60, 6));
//arrow function
const subtract = (x, y) => {
    return x - y;
};
const divide = (x, y) => x / y;
console.log(subtract(40, 20));
console.log(divide(40, 20));
//rest parameter
function sumAll(firstName, ...remainingNumbers) {
    let total = 0;
    for (const num of remainingNumbers) {
        total += num;
    }
    return total;
}
console.log(sumAll("John", 1, 2, 3, 4, 5));
//# sourceMappingURL=function.js.map
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
//# sourceMappingURL=function.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function printPersonProperty(person, property) {
    console.log(`Printing Person Property ${property} :"${person[property]}"`);
}
let person = {
    name: "Max",
    age: 27
};
printPersonProperty(person, "name");
//# sourceMappingURL=keyof.js.map
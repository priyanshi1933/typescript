"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cardinalDirections;
(function (cardinalDirections) {
    cardinalDirections[cardinalDirections["North"] = 1] = "North";
    cardinalDirections[cardinalDirections["East"] = 2] = "East";
    cardinalDirections[cardinalDirections["West"] = 3] = "West";
    cardinalDirections[cardinalDirections["South"] = 4] = "South";
})(cardinalDirections || (cardinalDirections = {}));
let currentDirection = cardinalDirections.South;
console.log(currentDirection);
//fully initialized
var statusCodes;
(function (statusCodes) {
    statusCodes[statusCodes["NotFound"] = 404] = "NotFound";
    statusCodes[statusCodes["Success"] = 200] = "Success";
    statusCodes[statusCodes["BadRequest"] = 400] = "BadRequest";
    statusCodes[statusCodes["Accepted"] = 202] = "Accepted";
})(statusCodes || (statusCodes = {}));
console.log(statusCodes.NotFound);
console.log(statusCodes.Success);
//string enums
var direction;
(function (direction) {
    direction["north"] = "north";
    direction["south"] = "south";
    direction["west"] = "west";
    direction["east"] = "east";
})(direction || (direction = {}));
console.log(direction.north);
console.log(direction.west);
//# sourceMappingURL=enums.js.map
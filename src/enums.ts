enum cardinalDirections{
    North=1,East,West,South
}
let currentDirection=cardinalDirections.South;
console.log(currentDirection);

//fully initialized
enum statusCodes{
    NotFound=404,
    Success=200,
    BadRequest=400,
    Accepted=202
}
console.log(statusCodes.NotFound);
console.log(statusCodes.Success);

//string enums
enum direction{
    north="north",
    south="south",
    west="west",
    east="east"
}
console.log(direction.north);
console.log(direction.west);
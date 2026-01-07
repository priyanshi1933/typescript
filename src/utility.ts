//Partial Type
interface Point{
    x:number
    y:number
}
let pointPart:Partial<Point>={};
pointPart.x=10;
console.log(pointPart)

//Required Type
interface Car{
    color:string,
    model:string,
    mileage?:number
}
let myCar:Required<Car>={
    color:"Black",
    model:"Mercedes",
    mileage:12000
}
console.log(myCar);

//Record Type
const nameAgeMap:Record<string,number>={
    "Alice":20,
    "Max":25
}
console.log(nameAgeMap)
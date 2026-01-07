type CarYear=number
type CarModel=string
type CarColor=string
type Car={
    year:CarYear,
    model:CarModel,
    color:CarColor
}
const carYear:CarYear=2001
const carModel:CarModel="Kia"
const carColor:CarColor="Black"
const car:Car={
    year:carYear,
    model:carModel,
    color:carColor
}
console.log(car);

//type alias
type Wrapped<T>={value:T};
const wrappedValue:Wrapped<number>={value:10}
console.log(wrappedValue);
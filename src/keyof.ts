//explicit key
interface Person{
    name:string
    age:Number
}
function printPersonProperty(person:Person,property:keyof Person){
    console.log(`Printing Person Property ${property} :"${person[property]}"`);
}
let person={
    name:"Max",
    age:27
}
printPersonProperty(person,"name");


function getTime():number{
    return new Date().getTime();
}
console.log(getTime());

//void return type
function printHello():void{
    console.log("Hello");
}
printHello();

//parameters
function multiply(a:number,b:number){
    return a*b;
}
console.log(multiply(2,5));

//optional parameter
function sum(x:number,y:number,z?:number){
    return x+y+(z||0);
}
console.log(sum(7,8));

//default parameter
function pow(value:number,exponent:number=10){
    return value**exponent;
}
console.log(pow(10));

//anonymous function
const sub=function(x:number,y:number):number{
    return x-y;
}
console.log(sub(60,6));

//arrow function
const subtract=(x:number,y:number):number=>{
    return x-y;
}
const divide=(x:number,y:number):number=>x/y;
console.log(subtract(40,20));
console.log(divide(40,20));

//rest parameter
function sumAll(firstName: string, ...remainingNumbers: number[]): number {
  let total = 0;
  for (const num of remainingNumbers) {
    total += num;
  }
  return total;
}

console.log(sumAll("John", 1, 2, 3, 4, 5)); 

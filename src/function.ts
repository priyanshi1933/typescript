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
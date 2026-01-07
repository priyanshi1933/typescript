class Person {
  private name: string;
  public constructor(name:string){
    this.name=name;
  }
  public getName():string{
    return this.name;
  }
}
      
const person = new Person("Priyanshi");
console.log(person.getName());

//parameter properties
class Car{
    public constructor(private color:string){}
    public getColor():string{
        return this.color
    }
}
const car=new Car("Red");
console.log(car.getColor());

//inheritance impliments
// interface Shape{
//     getArea:()=>number;
// }
// class Rectangle implements Shape{
//     public constructor(protected readonly width:number,protected readonly height:number){}
//     public getArea():number{
//         return this.width*this.height;
//     }
// }
// const rect=new Rectangle(10,20);
// console.log(rect.getArea());

//inheritance extends
interface Shape{
    getArea:()=>number;
}
class Rectangle implements Shape{
    public constructor(protected readonly width:number,protected readonly height:number){}
    public getArea():number{
        return this.width*this.height;
    }
}
class Square extends Rectangle{
    public constructor(width:number){
        super(width,width);
    }
}
const sq=new Square(20);
console.log(sq.getArea());




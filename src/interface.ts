interface Rectangle{
    height:number
    width:number
}
const rectangle:Rectangle={
    height:20,
    width:10
}
console.log(rectangle);

//extending interface

interface Square{
    length:number
}
interface ColoredSquare extends Square{
    color:string
}
const coloredSquare:ColoredSquare={
    length:25,
    color:"Pink"
}
console.log(coloredSquare);
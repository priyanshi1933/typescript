const element=document.createElement("p");
element.innerText="Hello DOM";
document.querySelector("#my-div")?.appendChild(element);

let div=document.querySelector("#my-div") as HTMLDivElement;
div?.classList.add("bg-success");

// const button=document.getElementById("btn") as HTMLButtonElement;
// button.onclick=()=>div.classList.toggle("bg-success");

const button=document.getElementById("btn");
if(button instanceof HTMLButtonElement){
    button.onclick=()=>div.classList.toggle("bg-success");
}
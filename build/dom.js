"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const element = document.createElement("p");
element.innerText = "Hello DOM";
document.querySelector("#my-div")?.appendChild(element);
let div = document.querySelector("#my-div");
div?.classList.add("bg-success");
// const button=document.getElementById("btn") as HTMLButtonElement;
// button.onclick=()=>div.classList.toggle("bg-success");
const button = document.getElementById("btn");
if (button instanceof HTMLButtonElement) {
    button.onclick = () => div.classList.toggle("bg-success");
}
//# sourceMappingURL=dom.js.map
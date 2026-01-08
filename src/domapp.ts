const input=document.getElementById('userInput') as HTMLInputElement
const button=document.getElementById('submitBtn') as HTMLButtonElement
const display=document.getElementById('display') as HTMLParagraphElement

button.addEventListener('click',(event:MouseEvent)=>{
    const text=input.value;
    if(text){
        display.textContent=`you entered ${text}`;
        input.value='';
    }else{
        display.textContent="please enter some text"
    }
});
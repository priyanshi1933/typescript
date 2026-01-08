"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const input = document.getElementById('userInput');
const button = document.getElementById('submitBtn');
const display = document.getElementById('display');
button.addEventListener('click', (event) => {
    const text = input.value;
    if (text) {
        display.textContent = `you entered ${text}`;
        input.value = '';
    }
    else {
        display.textContent = "please enter some text";
    }
});
//# sourceMappingURL=domapp.js.map
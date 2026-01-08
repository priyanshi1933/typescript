"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function validate(event) {
    event.preventDefault();
    const form = document.forms.namedItem("myForm");
    if (!form) {
        console.error("Form 'MyForm' Not Found");
        return;
    }
    const message = document.getElementById("message");
    if (message) {
        message.textContent = "";
    }
    const emailErr = document.getElementById("emailErr");
    const pwdErr = document.getElementById("pwdErr");
    const nameErr = document.getElementById("nameErr");
    const mnoErr = document.getElementById("mnoErr");
    if (emailErr) {
        emailErr.textContent = "";
    }
    if (pwdErr) {
        pwdErr.textContent = "";
    }
    if (nameErr) {
        nameErr.textContent = "";
    }
    if (mnoErr) {
        mnoErr.textContent = "";
    }
    const emailInput = form.elements.namedItem("email");
    const pwdInput = form.elements.namedItem("pwd");
    const nameInput = form.elements.namedItem("name");
    const mnoInput = form.elements.namedItem("mno");
    let isValid = true;
    if (!emailInput.value.includes("@")) {
        isValid = false;
        if (emailErr) {
            emailErr.textContent = "Please enter a valid email address";
        }
    }
    if (pwdInput.value.length < 6) {
        isValid = false;
        if (pwdErr) {
            pwdErr.textContent = "Password must be atleast 6 characters long";
        }
    }
    if (nameInput.value.length < 3) {
        isValid = false;
        if (nameErr) {
            nameErr.textContent = "Name must be atleast 3 characters long";
        }
    }
    if (mnoInput.value.length != 10) {
        isValid = false;
        if (mnoErr) {
            mnoErr.textContent = "Mobile numbers always have 10 digits number";
        }
    }
    if (isValid) {
        if (message) {
            message.textContent = "Form Submitted Successfully";
            message.style.color = "green";
        }
    }
    else {
        if (message) {
            message.textContent = "Please correct the errors above";
            message.style.color = "red";
        }
    }
}
document.addEventListener("DOMContentLoaded", () => {
    const form = document.forms.namedItem("myForm");
    if (form) {
        form.addEventListener("submit", validate);
    }
});
//# sourceMappingURL=validation.js.map
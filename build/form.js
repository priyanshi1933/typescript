"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const form = document.getElementById("contactForm");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const ProfileData = {
        username: formData.get('username'),
        age: Number(formData.get('age'))
    };
    console.log("Form Submitted", ProfileData);
});
//# sourceMappingURL=form.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_localstorage_1 = require("node-localstorage");
const localStorage = new node_localstorage_1.LocalStorage('./scratch');
const user = { name: 'Alice', age: 30 };
localStorage.setItem('userProfile', JSON.stringify(user));
//get the storage
const userProfileString = localStorage.getItem('userProfile');
if (userProfileString) {
    const userProfile = JSON.parse(userProfileString);
    console.log(userProfile.name);
}
else {
    console.log("No user profile found");
}
//remove the storage
localStorage.removeItem('userProfile');
console.log("Remove the UserProfile");
//clear the storage
localStorage.setItem("tempKey", "some value");
localStorage.clear();
console.log("All storage cleared");
//type-safe helper
const storage = {
    set: (key, value) => {
        localStorage.setItem(key, JSON.stringify(value));
    },
    get: (key) => {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
    },
    remove: (key) => {
        localStorage.removeItem(key);
    },
    clear: () => {
        localStorage.clear();
    }
};
storage.set('score', 100);
const score = storage.get('score');
console.log("Score is:", score);
storage.remove('score');
console.log("Score is removed");
storage.clear();
console.log("Score cleared");
//# sourceMappingURL=localstorage.js.map
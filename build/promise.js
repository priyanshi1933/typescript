"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("data received");
        }, 1000);
    });
};
fetchData()
    .then((data) => {
    console.log(data.toUpperCase());
})
    .catch((error) => {
    console.error("Error:", error.message);
});
//# sourceMappingURL=promise.js.map
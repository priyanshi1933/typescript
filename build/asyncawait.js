"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Async data has been fetched!");
        }, 2000);
    });
}
async function fetchDataAsync() {
    try {
        const result = await fetchData();
        console.log(result);
    }
    catch (error) {
        console.error("Error fetching data:", error);
    }
}
fetchDataAsync();
//# sourceMappingURL=asyncawait.js.map
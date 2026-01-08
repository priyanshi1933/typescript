"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function fetchUser(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status:${response.status}`);
        }
        const data = (await response.json());
        return data;
    }
    catch (error) {
        console.error("fetch Error:", error);
        throw error;
    }
}
(async () => {
    const apiURL = "https://jsonplaceholder.typicode.com/todos/1";
    try {
        const user = await fetchUser(apiURL);
        console.log(`Fetched User: ${user.title},Completed:${user.completed}`);
    }
    catch (error) {
        console.log("Could not fetch user data");
    }
})();
//# sourceMappingURL=getapi.js.map
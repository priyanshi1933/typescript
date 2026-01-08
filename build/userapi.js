"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function fetchUsers() {
    const apiURL = "https://jsonplaceholder.typicode.com/users";
    try {
        const response = await fetch(apiURL);
        if (!response.ok)
            throw new Error('Network response was not ok');
        // Explicitly cast the JSON to our User array type
        const users = await response.json();
        return users;
    }
    catch (error) {
        console.error("Fetch error:", error);
        return [];
    }
}
async function displayUsers() {
    const userListElement = document.getElementById('user-list');
    if (!userListElement)
        return;
    const users = await fetchUsers();
    // Create list items for each user
    userListElement.innerHTML = users
        .map(user => `
      <li class="user-item">
        <strong>${user.name}</strong> (${user.email})
      </li>
    `)
        .join('');
}
// Initialize
displayUsers();
//# sourceMappingURL=userapi.js.map
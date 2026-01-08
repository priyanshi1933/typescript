interface User{
    id:number
    name:string
    email:boolean
}
async function fetchUsers(): Promise<User[]> {
    const apiURL="https://jsonplaceholder.typicode.com/users";
   try {
    const response = await fetch(apiURL);
    if (!response.ok) throw new Error('Network response was not ok');
    
    // Explicitly cast the JSON to our User array type
    const users: User[] = await response.json();
    return users;
  } catch (error) {
    console.error("Fetch error:", error);
    return [];
  }
}
async function displayUsers(): Promise<void> {
  const userListElement = document.getElementById('user-list');
  if (!userListElement) return;

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
interface User{
    id:number
    title:string
    completed:boolean
}
async function fetchUser(url:string):Promise<User>{
    try{
        const response=await fetch(url);
        if(!response.ok){
            throw new Error(`HTTP error! Status:${response.status}`);
        }
        const data=(await response.json()) as User;
        return data;
    }catch(error){
        console.error("fetch Error:",error);
        throw error;
    }
}
(async()=>{
    const apiURL="https://jsonplaceholder.typicode.com/todos/1";
    try{
        const user=await fetchUser(apiURL);
        console.log(`Fetched User: ${user.title},Completed:${user.completed}`)
    }catch(error){
        console.log("Could not fetch user data")
    }
})();
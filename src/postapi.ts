interface NewUserData{
    title:string
    completed:boolean
}

interface User extends NewUserData {
  id: number;
}

async function createUser(url:string,userData:NewUserData):Promise<User>{
    const response=await fetch(url,{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(userData),
    })
    if(!response.ok){
        throw new Error(`HTTP error! Status: ${response.status}`)
    }
    return (await response.json()) as User;
}

(async()=>{
    const apiURL="https://jsonplaceholder.typicode.com/todos";
    const newUser={title:"API",completed:true};
    try{
        const createdUser=await createUser(apiURL,newUser);
        console.log(`User created with ID: ${createdUser.id}`)
    }catch(error){
        console.error("Error creating user:",error);
    }
})();
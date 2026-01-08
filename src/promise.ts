const fetchData=():Promise<string>=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("data received");
        },1000)
    })
}
fetchData()
    .then((data)=>{
        console.log(data.toUpperCase())
    })
    .catch((error:Error)=>{
        console.error("Error:",error.message)
    })
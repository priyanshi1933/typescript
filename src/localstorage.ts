import {LocalStorage} from 'node-localstorage';
const localStorage = new LocalStorage('./scratch');
//set the storage
interface User{
    name:string;
    age:number
}
const user:User={name:'Alice',age:30};
localStorage.setItem('userProfile',JSON.stringify(user));

//get the storage
const userProfileString=localStorage.getItem('userProfile');
if(userProfileString){
    const userProfile:User=JSON.parse(userProfileString);
    console.log(userProfile.name);
}else{
    console.log("No user profile found");
}

//remove the storage
localStorage.removeItem('userProfile');
console.log("Remove the UserProfile");

//clear the storage
localStorage.setItem("tempKey","some value");
localStorage.clear();
console.log("All storage cleared");

//type-safe helper
const storage={
    set:<T>(key:string,value:T):void=>{
        localStorage.setItem(key,JSON.stringify(value));
    },
    get:<T>(key:string):T | null=>{
        const item=localStorage.getItem(key);
        return item?(JSON.parse(item) as T) : null;
    },
    remove:(key:string):void=>{
        localStorage.removeItem(key);
    },
    clear:():void=>{
        localStorage.clear();
    }
};
storage.set<number>('score',100);
const score=storage.get<number>('score');
console.log("Score is:", score);
storage.remove('score');
console.log("Score is removed");
storage.clear();
console.log("Score cleared");


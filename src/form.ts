interface UserProfile{
    username:string
    age:number
}

const form=document.getElementById("contactForm") as HTMLFormElement
form.addEventListener("submit",(e:SubmitEvent)=>{
    e.preventDefault();
    const formData=new FormData(form);
    const ProfileData:UserProfile={
        username:formData.get('username') as string,
        age:Number(formData.get('age'))
    }
    console.log("Form Submitted",ProfileData);
})
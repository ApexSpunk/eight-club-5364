let form =document.querySelector("form");

let signupLS = JSON.parse(localStorage.getItem("signup"))||[];
form.addEventListener("submit",function(event){

    event.preventDefault();


    let obj={
        email:form.email.value,
        password:form.password.value,
    }
    let flag=false;
    signupLS.forEach(function(ele){
    if(ele.email ===obj.email && ele.password ===obj.password){
        flag =true;
        alert("Signin Sucessfully")
         window.location.href="index.html"
    }

    })
    if(flag ===false){
        alert("USER DOESNOT EXIST")
    }
})
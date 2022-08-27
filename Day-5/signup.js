let  form = document.querySelector("form");

let signupLS=JSON.parse(localStorage.getItem("signup")) || [];

form.addEventListener("submit",function(event){
    event.preventDefault();
    let obj={
     mobile:form.mobile.value,
     email:form.email.value,
     password:form.password.value

    }

    if(obj.mobile == "" || obj.email == "" || obj.password == ""){
        alert("Empty Field")
    }else{
        signupLS.push(obj)
        localStorage.setItem("signup",JSON.stringify(signupLS))
        alert("Signup Sucessfully");

        window.location.href="signin.html"
    }
})
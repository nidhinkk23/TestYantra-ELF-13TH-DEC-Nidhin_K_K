const loginButton = document.getElementById('login')
loginButton.addEventListener('click',function() {
    const useForm = document.forms['userForm']
    const userNameElement = userForm.username
    const passwordNameElement = userForm.password
    const userName = userNameElement.value
    const password = passwordNameElement.value
    console.log("Username is ",userName);
    console.log("Password is ",password);
    
    if(userName.trim().length>6){
        console.log("Username is valid");
        
    }else{

        console.log("Username Invalid");
        
    }
    if(password.trim().length>5){
        console.log("password is valid");
        
    }else{
        let element = document.createElement("p")
        element.textContent = "password is invalid"
        document.body.appendChild(element)
        
        
        console.log("password is invalid");
        
    }
    
})
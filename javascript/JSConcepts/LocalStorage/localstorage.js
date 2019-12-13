localStorage.setItem('role','admin')
localStorage.setItem('email','abc@gmail.com')

const email = localStorage.getItem('email')
console.log("email id ",email);

localStorage.removeItem('role')//its removed
localStorage.clear()


function factoraials(x) {
    if(x ===0){
        return 1;
    }else{
        return factoraials(x-1)*x
    }
}
console.log(factoraials(4));



function greet(){
    alert("Welcome to javascript")
}


let element = document.createElement("p")
element.textContent = "JavaScript is Easy"
function elementCreation(){
    
    document.body.appendChild(element)

}
function showData() {
    const ele = document.getElementById('show')
    console.log(ele.textContent);
    
}

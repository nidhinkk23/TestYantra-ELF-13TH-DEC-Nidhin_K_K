//second way to write the events
const element = document.getElementById('one')
element.onkeydown = function() {
    console.log("triggered");
    
}

//3rd way 
const second = document.getElementById('two')

second.addEventListener('keyup',function() {
    
// console.log("Keyup events");
//to take the value from the input use vale attr
console.log(second.value);
// console.log(second.textContent);Dont use this
let x =document.getElementById('pe')
x.textContent = second.value


})




let p2 = document.createElement('p')
const three = document.getElementById('three')

three.addEventListener('keyup',function () {
    
    p2.textContent = three.value
    console.log(three.value);
    document.body.appendChild(p2)
    



})







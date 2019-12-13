
// alert("This site may contain ------information")
// let result = confirm("Are u 18 years old")
// console.log("Result ",result);
// let userName = prompt("Enter your name")
// console.log("name is ",userName);

// let gmail = prompt("Enter your gmail",'xyz@gmail,com')
// console.log("gmail is ",gmail);
var userName = 'arjun'
var gmail = 'arjun@gmail.com'
console.log(window);
console.log(this);
console.log(window === this);


function testWindow() {
    console.log("Testing Window object");
    
}
window.testWindow()
this.testWindow()

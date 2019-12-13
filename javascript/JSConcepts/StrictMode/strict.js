// 'use strict'


/* firstName = 'Bill'
lastName = 'Gates'                          //Should be Error
console.log("First Name ",firstName);
console.log("last Name ",lastName); */

function display() {
    console.log("This is ",this);
    console.log("Display function");
    
}
display()


function showData() {
    //this is undefined in strict mode for function 
    //which is called like a normal function
    'use strict'//should be first line
    console.log('This is ',this);
    
    console.log("showData function");
    this.data = 'hello'
    
}
// console.log(showData());//call it like a normal fn it is undefined to avoid this === window
console.log(new showData());


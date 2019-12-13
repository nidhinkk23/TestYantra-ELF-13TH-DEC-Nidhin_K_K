//var keyword

//global scope variable
var a = 10;

function check() {
    //local scope variables
    var b= 20
    console.log("b value is ",b)//can't access outside
}
check()

for (var i = 0; i < 5; i++) {
    
    
}
console.log("i value is ",i);

//let keyword
//Global scope


//console.log("x value is ",x);There is no concept of hoisting

let x =10;
//let x = 20;No Redecclaration
x = 30;//Reassigning is possible

function test() {
    //Local scope 
    let y = 10;
    console.log("y value is ",y);

}
//console.log("y value is ",y) Function scope
test()
for (let j = 0; j < 5; j++) {
    //Block scope
console.log(j);
    
}
//console.log(j);can't access outside the block

//const keyword

//Global scope
//const p;Only decclaration is not possible
const p = 10;
//const p =20;Re deeclaration is not possible
//p=20;Re-assigning is not possible

const items = ['watch','shoe','choccolates','mobiles']
items.push('laptop')//modification is possible without using the = operater
console.log("items",items);
 //items = []//Can't do like this

 const person = {
                    name : 'smriti madana'

                }
 console.log("person",person);
 //no Reassignment
 /* person = {
                name : 'smriti madana'
 } */
   
person.name = 'alia'
console.log("person ",person);




//Named Function

function add(a,b) {
  var sum = a+b;
  console.log("Sum is ",sum);
  
}

add(10,15)

function check(n){
    console.log("N value is  ",n);
    
}

check()//will work

function test(){
    console.log("Test method");
    
}
test(1212)//aut ignore the parm

function multiply(a,b) {
    return a*b
}
var mul = multiply(10,4)
console.log("product ",mul);
//Anonymus function or Fn expression
var division = function (x,y) {
                     return x/y;
                }
var d = division(25,5)
console.log("Value is ",d);
//Above ; is mandatory 
//Self invoked or immediate invoked fn expn

(function (p,q) {
    console.log("value is: ",p-q);
    
})(20,8);//Automatically it will exe.


//Arrow function

var addition1 = (a,b,c) => {
    return a+b+c
}

console.log("Addition",addition1(10,20,30));
var addition2 = (a,b,c) => a+b+c

console.log("",addition2(10,20,30));

var sqr = a => a*a
console.log("Square root ",sqr(10));

var greet = () => console.log("Good eveninig Ladies and Gentlement");
greet()


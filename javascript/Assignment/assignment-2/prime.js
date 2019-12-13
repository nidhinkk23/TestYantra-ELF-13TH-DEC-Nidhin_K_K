console.log("*********Named function*************");

function checkPrime(a) {
    var flag = true;
    if(a<=1){
        console.log(a,"is not a prime no.");
        
    }
    else{
    for (i = 2; i <= a - 1; i++)
        if (a % i == 0) {
            flag = false;
            break;
        }
    if (flag == true)
        console.log(a + " is prime");
    else
        console.log(a + " is  not prime");
    }
}

checkPrime(97)
console.log("***********Anonymus function*********************");
var result = function(a) {
    var flag = true;
    if(a<=1){
        console.log(a,"is not a prime no.");
    }
    else{
    for (i = 2; i <= a - 1; i++)
        if (a % i == 0) {
            flag = false;
            break;
        }
    if (flag == true)
        console.log(a + " is prime");
    else
        console.log(a + " is  not prime");
    }
}
result(1)
console.log("**********Self invoked function**************");
(function(a) {
    var flag = true;
    if(a<=1){
        console.log(a,"is not a prime no.");
    }
    else{
    for (i = 2; i <= a - 1; i++)
        if (a % i == 0) {
            flag = false;
            break;
        }
    if (flag == true)
        console.log(a + " is prime");
    else
        console.log(a + " is  not prime");
    }
})(7);
console.log("*********Arrow function************");

var r = a => {
    var flag = true;
    if(a<=1){
        console.log(a,"is not a prime no.");
    }
    else{
    for (i = 2; i <= a - 1; i++)
        if (a % i == 0) {
            flag = false;
            break;
        }
    if (flag == true)
        console.log(a + " is prime");
    else
        console.log(a + " is  not prime");
    }   
}
r(10)
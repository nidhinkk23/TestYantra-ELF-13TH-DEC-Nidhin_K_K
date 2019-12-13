console.log("*********Named function*****************");

function factorial(a) {

    var i, fact = 1;

    for (i = 1; i <= a; i++) {
        fact = fact * i;
    }

    return fact


}
console.log("Named function",factorial(5));

console.log("**************Anonymus function**********************");
var factorial2 = function (a) {

    var i, fact = 1;

    for (i = 1; i <= a; i++) {
        fact = fact * i;
    }

    return fact


}
console.log("Anonymus function",factorial2(5));

console.log("***********Self invoked function**************");

(    function (a) {
        var i, fact = 1;

        for (i = 1; i <= a; i++) {
            fact = fact * i;
        }
        console.log("Self invoked function",fact);
        }
)(5);

console.log("*******************Arrow Function***********************");

var factorial3 = a => {
    var i, fact = 1;

    for (i = 1; i <= a; i++) {
        fact = fact * i;
    }
    return fact
}

var result = factorial3(5)
console.log("Arrow Function",result);


console.log("*****NAmed function**********");

function circumferance(r) {
    var a = Math.PI
    return 2*a*r
}

console.log(circumferance(3));
console.log("*******Anonymus function********");
var x = function(r) {
    var a = Math.PI
    return 2*a*r
}

console.log(x(3));
console.log("*****Self invoked function********");
(function(r){
    var a = Math.PI
    console.log(2*a*r);
     
})(3);
console.log("**********Arrow function***********");
var circum = r => {
    var a = Math.PI
    console.log(2*a*r);
}
circum(3)
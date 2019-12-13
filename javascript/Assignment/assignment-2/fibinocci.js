console.log("**********Named function***************");

function fibinocci(num) {
    var var1 = 0;
    var var2 = 1;
    var var3;
    console.log(var1);
    console.log(var2);
    for (let i = 0; i < num-2; i++) {
        
        
        var3 = var1 + var2;
        var1 = var2;
        var2 = var3;
        console.log(var3);
    }
}
fibinocci(10)

console.log("**************Anonymus function**********************");
var fibinocci = function (num) {

    var var1 = 0;
    var var2 = 1;
    var var3;
    console.log(var1);
    console.log(var2);
    for (let i = 0; i < num-2; i++) {
        
        
        var3 = var1 + var2;
        var1 = var2;
        var2 = var3;
        console.log(var3);
    }


}
fibinocci(5)
console.log("***********Self invoked function**************");

(    function (num) {
    var var1 = 0;
    var var2 = 1;
    var var3;
    console.log(var1);
    console.log(var2);
    for (let i = 0; i < num-2; i++) {
        
        
        var3 = var1 + var2;
        var1 = var2;
        var2 = var3;
        console.log(var3);
    }
}
)(5);
console.log("*******************Arrow Function***********************");

var fibinocciArrow = num => {
    var var1 = 0;
    var var2 = 1;
    var var3;
    console.log(var1);
    console.log(var2);
    for (let i = 0; i < num-2; i++) {
        
        
        var3 = var1 + var2;
        var1 = var2;
        var2 = var3;
        console.log(var3);
    }
}

fibinocciArrow(5)
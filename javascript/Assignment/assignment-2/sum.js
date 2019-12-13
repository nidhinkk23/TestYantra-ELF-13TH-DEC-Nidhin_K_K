console.log("*******Named function*****");
function arraysum() {
  
    var numbers = [10, 20, 30, 40] // sums to 100
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
      sum += numbers[i]
    }
    console.log(sum);
    
}
arraysum()

console.log("********Anonymus function*******");
var result = function() {
    var numbers = [10, 20, 30, 40] // sums to 100
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
      sum += numbers[i]
    }
    console.log(sum);
}
result();
console.log("**********self invoked function************");
(function(){
    var numbers = [10, 20, 30, 40] // sums to 100
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
      sum += numbers[i]
    }
    console.log(sum); 
})();
console.log("*********Arrow function*********");
var r = () =>{
    var numbers = [10, 20, 30, 40] // sums to 100
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
      sum += numbers[i]
    }
    console.log(sum); 
}
r()

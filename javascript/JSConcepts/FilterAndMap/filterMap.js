var numbers = [100,200,300,400]

var filteredNumber = numbers.filter(function(val,index) {
    if(val > 200){
        return true
    }
    else{
        return false
    }
})

console.log("After filter ",filteredNumber);
console.log("After filter ",numbers);

var filNumber = numbers.filter(val => val>200)
console.log("Filter using Arrow ",filNumber);

// console.log("**********set intervl****************");

// var a = 0;
// var f = setInterval(() => {
//     a++
    
//     console.log(a);
//     if(a === 6){
//         clearInterval(f)
//     }
    
// }, 1000);



// console.log("11**********sort*********11");
// var n = [1,5,4,2,8]
// console.log(n.sort((a,b) => b-a));
 
// console.log(n);// change the existing array

// console.log("*******reduce*********");
// var nm = [3,4,7,5,8,9,1]

// var r = nm.reduce((a,c) => a+c,0 )//create new array
// console.log(r);

// console.log(nm);

console.log("******Map*******");
//Can return anything 
var mappedNumbers = numbers.map(function(val,index) {
    val = val + 50
    return val
})

console.log("After map ",numbers);
console.log("After map ",mappedNumbers);


console.log("**********************");

var r = numbers.map(val => val+50)
console.log("Using Arrow ",r);

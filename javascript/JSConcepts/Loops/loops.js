var fruits = ["Apple","Orange","Grspes","Kiwi"]
//For loop
for (let i = 0; i < fruits.length; i++) {
    console.log("Fruits ",fruits[i]);
}
console.log("********for of************");
//For of loop
for (var fruit of fruits) {
    console.log("Using for of ",fruit);
    
}
console.log("*********for in***********");

//for in loop for array
//use for both array and object
for (var index in fruits) {
    console.log("Index is ",index);
    console.log("fruit is ",fruits[index]);
    
}
console.log("********for in************");
//for Object

var person = {
    name : 'Priyanka',
    college : 'APS',
    hasBF : false

    }


for (var key in person) {
    console.log("Key is ",key);
    console.log("value is ",person[key]);//Can't use the person.key here
    
}
console.log("*********for-each method***********");
//Only for array
fruits.forEach((value,index) => {
    console.log("Index is",index);
    console.log("Value is ",value);
    
    
});

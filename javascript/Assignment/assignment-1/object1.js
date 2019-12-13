var person = {
    name : 'Arjun',
    id : 1,
    result : true
    
}
var bike = {
    name : 'yamaha',
    no : 1,
    abs : null
    
}

var car = {
    name : 'BMW',
    cost$ : 100000,
    discount : null
    
}
var pen = {
    name : 'cello',
    cost : 10,
    color : "blue"
    
}
var student = {
    name : 'Sarath',
    id : 1,
    haveBike : true
    
}
var cricketer = {
    name : 'Kohli',
    rank : 1,
    100 : 54
    
}
var footballer = {
    name : 'messi',
    rank : 1,
    goals : 70,
    hadWc : false
    
}
var officer = {
    name : 'shibu',
    sal : 100000,
    id : 1
    
}
var chappel = {
    name : 'vkc',
    cost : 100,
    color : "blue"
    
}
var animal = {
    name : 'elephent',
    weight : 100,
    height : 300
    
}







console.log("*******************object without using new keyword**********************************************************");

for (var key in bike) {
    console.log(key,bike[key]);
    
}
console.log("********************");

for (var key in person) {
    console.log(key,person[key]);
    
}   
console.log("********************");
for (var key in student) {
    console.log(key,student[key]);
    
}
console.log("********************");
for (var key in car) {
    console.log(key,car[key]);
    
}
console.log("********************");
for (var key in pen) {
    console.log(key,pen[key]);
    
}
console.log("********************");
for (var key in animal) {
    console.log(key,animal[key]);
    
}
console.log("********************");
for (var key in chappel) {
    console.log(key,chappel[key]);
    
}
console.log("********************");
for (var key in cricketer) {
    console.log(key,cricketer[key]);
    
}
console.log("********************");
for (var key in footballer) {
    console.log(key,footballer[key]);
    
}
console.log("********************");
for (var key in officer) {
    console.log(key,officer[key]);
    
}
console.log("********************");









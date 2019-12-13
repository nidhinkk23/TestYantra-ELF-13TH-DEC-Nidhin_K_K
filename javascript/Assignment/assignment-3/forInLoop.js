var fruits = ["apple","orange","banana","grapes"]
var car = ["bmw","ferrari","audi","lamborgini"]
var players = ["messi","ronaldo","neymar","marcelo"]
var details = ["amal",1,10,true]
var ferrari = ["Ferrari",false,null]
var kohliDet = ["kohli",55,1,"vk"]
var rank = [1,4,5,8]
var marks = [67,56,77,89]
var names = ["nidhin","shibu","sarath","arjun"]
var kerala = [14,"trivandram","pinarai",1]







console.log("*************Array without new keyword******************************");

for (var i in fruits) {
    console.log("fruit is ",fruits[i]);
}
console.log("***************************");
for (var i in car) {
    console.log("car  ",car[i]);
}
console.log("***************************");
for (var i in players) {
    console.log("players  ",players[i]);
}
console.log("***************************");
for (var i in details) {
    console.log("details is ",details[i]);
}
console.log("***************************");
for (var i in kohliDet) {
    console.log("kohliDet  ",kohliDet[i]);
}
console.log("***************************");
for (var i in fruits) {
    console.log("fruit  ",fruits[i]);
}
console.log("***************************");
for (var i in kerala) {
    console.log("kerala  ",kerala[i]);
}
console.log("***************************");

for (var i in names) {
    console.log("names  ",names[i]);
}
console.log("***************************");
for (var i in marks) {
    console.log("marks is ",marks[i]);
}
console.log("***************************");
for (var i in rank) {
    console.log("rank is ",rank[i]);
}
console.log("***********OBJECT****************");

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











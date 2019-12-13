var hobbies = ["Football","Badminton","Cooking","Singing","Travrlling"]
hobbies.push("Reading","Coding")
console.log("Hobbies after push",hobbies);

console.log("*******************************");

hobbies.pop();
console.log("Hobbies after pop ",hobbies);

console.log("***************************************");
hobbies.unshift("Sleeping","BirdWatchjing")
console.log("Hobbies after unshift",hobbies);
console.log("****************************************");
hobbies.shift();
console.log("Hobbies after shift",hobbies);
console.log("*****************");

var isHobbiesArray = Array.isArray(hobbies)
console.log("Is Hobbie array ",isHobbiesArray);
console.log("*******************************");

var hasCooking = hobbies.includes("Cooking",2)//Start searching from this index
console.log("Has cooking ",hasCooking)
console.log("**********************************")

var indexSinging = hobbies.indexOf("Singing")
console.log("Index of singing is ",indexSinging);

console.log("************************");
var str = hobbies.join("-")
console.log("Join method is ",str);
console.log("************************");

var brands = ['Signature','Bisleri','KingsFisher','Kinely']
brands.splice(1,1,"Ibbani")//2nd parm no. of deleteing elem.
console.log("Brands after splice ",brands);
console.log("********************");

var movies = ["Bangara Manushya","Bhoo Kailas","Mother India","Balan","Indian"]
var slicedMovies = movies.slice(1,3)

console.log("After slice ",movies);
console.log("New Array ",slicedMovies);

var newArray = movies.slice(0,movies.length)
newArray.push("Hello")
newArray.unshift("Banglore Days")
console.log("movies",movies);
console.log("new Array",newArray);





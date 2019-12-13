var persons = ["nidhin","shibu","sarath","amal","arjun"]
persons.push("athul","arshid")
console.log("persons after push",persons);

console.log("*******************************");

persons.pop();
console.log("persons after pop ",persons);

console.log("***************************************");
persons.unshift("jothi","nived")
console.log("persons after unshift",persons);
console.log("****************************************");
persons.shift();
console.log("persons after shift",persons);
console.log("*****************");

var isPersonArray = Array.isArray(persons)
console.log("Is persons array ",isPersonArray);
console.log("*******************************");

var hasArjun = persons.includes("arjun",2)//Start searching from this index
console.log("Has arjun ",hasArjun)
console.log("**********************************")

var indexSarath = persons.indexOf("sarath")
console.log("Index of sarath is ",indexSarath);

console.log("************************");
var str = persons.join("-")
console.log("Join method is ",str);
console.log("************************");


persons.splice(1,1,"amal")//2nd parm no. of deleteing elem.
console.log("person after splice ",persons);
console.log("********************");


var slicedPersons = persons.slice(1,3)

console.log("After slice ",persons);
console.log("New Array ",slicedPersons);

console.log("*****************************************************");

var players = ["messi","ronaldo","neymar","marcelo"]
players.push("ronaldinho","sidan")
console.log("players after push",players);

console.log("*******************************");

players.pop();
console.log("players after pop ",players);

console.log("***************************************");
players.unshift("hazard","beckham")
console.log("persons after unshift",players);
console.log("****************************************");
persons.shift();
console.log("players after shift",players);
console.log("*****************");

var isPlayersArray = Array.isArray(players)
console.log("Is players array ",isPlayersArray);
console.log("*******************************");

var hasNeymar = players.includes("neymar",2)//Start searching from this index
console.log("Has neymar ",hasNeymar)
console.log("**********************************")

var indexBecham = players.indexOf("beckham")
console.log("Index of beckham is ",indexBecham);

console.log("************************");
var str = players.join("-")
console.log("Join method is ",str);
console.log("************************");


players.splice(1,1,"iniesta")//2nd parm no. of deleteing elem.
console.log("players after splice ",players);
console.log("********************");


var slicedPlayers = players.slice(1,3)

console.log("After slice ",players);
console.log("New Array ",slicedPlayers);

console.log("*****************************************************");










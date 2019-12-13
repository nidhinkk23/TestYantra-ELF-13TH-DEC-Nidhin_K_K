const person = {
    name: "yesh",
    age: 38,
    color: "pink",
    hobbies: ["Singing", "Acting", "Cricket"],
    address: {
        city: "Bangalore",
        pincode: 560068
    },
    fn : function () {
        
        
    },
    j : Math.max(10,20),
    k : undefined
}

console.log("Js person objct ",person);

const jsonPerson = JSON.stringify(person)

console.log("JSON person object ",jsonPerson);


const jsPerson = JSON.parse(jsonPerson)

console.log("JS Person obj ",jsPerson);

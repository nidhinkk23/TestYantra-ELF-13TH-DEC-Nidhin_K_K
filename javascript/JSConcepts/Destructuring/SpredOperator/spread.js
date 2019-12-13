const numbers = [100,200,300]
console.log("Numbers ",numbers);

const copyOfNumbers = [...numbers]
console.log("copyOfNumbers ",copyOfNumbers);

numbers.push(500)
console.log("After push no. ",numbers);
console.log("After push copyOfNumbers. ",copyOfNumbers);

//

const animals = ['Lions ','Tiger','Cow','Dog']
const moreAnimals = ['Girafe','Camel','Puma','Human']
const copyOfAnimal = [...animals,...moreAnimals]

console.log("copyOfAnimal ",copyOfAnimal);

//Spread Operator with Object 
const person = {
    name : 'Surendra',
    age : 23,
    height : 5.7,
    weight : 60
}

const copyOfPerson = {...person}

person.name = 'Sundari'
console.log("Person Object ",person);
console.log("Copy Of Person Object ",copyOfPerson);

const teacher = {
    name : 'Reena',
    age : 30,
    Subject : ['Social','English']

}
const address = {
    city : 'Bengaluru',
    pincode : 56068,
    landmark : 'BTM'
}

const teacherWithAddress = {...teacher,...address}
console.log("Teacher with address ",teacherWithAddress);
const teacherWithPhoneno = {
    ...teacher,
    phoneno : 9494949494,
    married : false,
    getName : function() {
        return this.name
    }

}

console.log("teacherWithPhoneno ",teacherWithPhoneno);









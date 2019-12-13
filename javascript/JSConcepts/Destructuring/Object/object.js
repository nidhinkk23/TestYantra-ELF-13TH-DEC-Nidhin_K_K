const person = {
    name: 'raj',
    age: 80,
    weight: 60,
    hobbies: ['Acting', 'Singing']
}
const{hobbies} = person;
console.log("Hobbies are ",hobbies);

function displayHobbies({hobbies}) {
        for (const hobby of hobbies) {
            console.log(hobby.toUpperCase());
            
        }


}
displayHobbies(person)




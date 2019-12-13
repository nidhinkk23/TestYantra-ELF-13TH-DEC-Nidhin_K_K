const person = {
    name : 'prabhas',
    age : 40,
    color : 'white'
}
//Using template Literal (String interpolation)
console.log(`Name is ${person.name}
Age is ${person.age}
Color is ${person.color}
Income is ${250000000 * 12}`);


let str = "hello"
for (let i = 1; i < str.length+1; i++) {
    let r = str.charAt(str.length-i)
    console.log(r);
    
}


// Array Destructuring

const numbers = [100,200,300,400]
let[num1,num2,num3,num4] = numbers
console.log("Num 1",num1);//alt shift arrow
console.log("Num 2",num2);
console.log("Num 3",num3);
console.log("Num 4",num4);


const items = [
    {
        name : 'watch',
        brand : 'titan',
        price : 2000

    },{
        name : 'lipstick',
        brand : 'lakme',
        price : 300

    },{
        name : 'mobile',
        brand : 'mi',
        price : 8000

    }
]

const [item1,item2] = items
console.log("item1",item1);
console.log("item2",item2);

const {name} = item1
console.log(name);



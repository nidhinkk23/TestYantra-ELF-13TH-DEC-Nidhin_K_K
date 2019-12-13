//Important
const john = {
    name : 'john',
    age : 25,
    presentation : function (style,timeOfDay) {
        if (style === 'formal')
            console.log(`Good ${timeOfDay},this is ${this.name}`);
        else
            console.log(`Hey ${timeOfDay},this is ${this.name}`);
                
       
    }
}
/* const john = {
    name : 'john',
    age : 25,
    presentation : function (...arr) {//Rest Operator that store as array can any parameters
        if (arr[0] === 'formal')
            console.log(`Good ${arr[1]},this is ${this.name}`);
        else
            console.log(`Hey ${arr[1]},this is ${this.name}`);
                
       
    }
} */

john.presentation('formal','Morning')
console.log("*************");

const babitha = {
    name : 'babitha',
    age : 23,
}
john.presentation.call(babitha,'friendly','Evening')


const emily = {
    name : 'emily',
    age : 22
}

john.presentation.apply(emily,['formal','Night'])


const vijay = {
    name : 'vijay',
    age : 50
}
//****imp *
const bindFunction = john.presentation.bind(vijay,'friendly')//it will not execute the fn instead Create a copy of the fn and return it
// bindFunction('friendly','afternoon')
//We can reuse the fn whenever req. with diff parameter
bindFunction('Morning')
bindFunction('Evening')
bindFunction('Night')





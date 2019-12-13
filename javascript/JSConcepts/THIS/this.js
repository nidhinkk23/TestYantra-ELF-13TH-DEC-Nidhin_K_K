//Global this 
console.log("This is window object ",this);

//Arrow Function
display = () =>{
    //this is parent context ie window object
    console.log("This is window object ",this);
    
}
//Named function
function show() {
    //this is window object as it is invoked by window object
    console.log("This is window object ",this);
    
}
display()
show()

const person = {
    firstName : 'katrina',
    lastName : 'kaif',
    color : 'black',
    getFullName : function() {
        //this is person object as it  is invoked by person
        //obj ref
        console.log("This is person obj ",this);
        
    },
    getColor : function() {
        getData = () => {
            //this is the parent context ie person obj
            console.log("This is person obj ",this);
            

        }
        function showData() {
            //this is the window obj as it is invoked
            //by window referance
            console.log("This is window obj ",window);
            
        }
        getData()
        showData()
    }
}



//Constructor Function
function Employee(name, age) {//PascalCase
    console.log(this === window);
    this.ename = name
    this.age = age
    this.walk = function () {
        console.log("Walk fn executed");
    }
    this.getName = function () {
        //this equal to employee object
        console.log("This employee object ", this);

        function greet() {
            //this is window as it invoked by window object referance
            console.log("This is window object "), this;

        }
        //Arrow function
        getData = () => {
            //this is the parent context ie employee object
            console.log("This is employee object ", this);
            console.log("Get daata function");


        }
        greet()
        getData()
        return this.ename

    }
}
const mark = new Employee("Mark Zukerberg", 35)
console.log("Name is ", mark.ename);
console.log("Age is ", mark.age);
mark.walk()
let name = mark.getName()
console.log("Name is ", name);


console.log("*************************");


/* function Employee(name,age) {//PascalCase
   console.log(this===window);

   this.ename = name
   this.age  = age
   this.walk = function() {
       console.log("Walk fn executed");
   }
   this.getName = function() {
       return this.ename
   }
}
const mark = Employee("Mark Zukerberg",35)
console.log("Name is ",this.ename);
console.log("Age is ",this.age);
this.walk()
let name = this.getName()
console.log("Name is ",name);




*/
class Person {
    constructor(fname, lname, age) {
        this.fname = fname;
        this.lname = lname
        this.age = age
    }
    getFullName() {
        return this.fname + ' ' + this.lname
    }
}

const person = new Person('nazriya', 'Fahadh', 26)
console.log("First Name is ", person.fname);
console.log("Last Name is ", person.lname);
console.log("Age is ", person.age);
const fullName = person.getFullName()
console.log("Full NAme ", fullName);


class Teacher extends Person {
    constructor(fname, lname, age, subjects) {
        super(fname, lname, age)
        this.subjects = subjects
    }
    getSubjects() {
        return this.subjects
    }
    static teachingStyle(){
        return 'Boring teaching'
    }
}


const teacher = new Teacher('Rajeswari', 'Fahadh', 26, ['science', 'English'])
const fullname = teacher.getFullName()
console.log(fullname);
const subjects = teacher.getSubjects()
console.log(subjects);

console.log("Teacher FirstName is ", teacher.fname);
console.log("Teacher LastName is ", teacher.lname);
console.log("Teacher age is ", teacher.age);

const style = Teacher.teachingStyle()
console.log(style);













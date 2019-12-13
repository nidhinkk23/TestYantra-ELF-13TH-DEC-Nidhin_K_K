var person = new Object();
person.firstName = 'dulqer';
person.lastName = "salman";
person.sal = 10000;

var bike = new Object();      
bike.name = 'yamaha';
bike.no = 1;
bike.abs = null;

var car = new Object();
car.name = 'BMW';
car.cost = 100000;
car.discount = null;

var pen = new Object();
pen.name = 'cello';
pen.cost = 10;
pen.color = "blue";

var student = new Object();
student.name = 'Sarath';
student.id = 1;
student.haveBike = true;

var cricketer = new Object();
cricketer.name = 'Kohli';
cricketer.rank = 1;
cricketer.hund = 54;

var footballer = new Object();
footballer.name = 'messi';
footballer.rank = 1;
footballer.goals = 70;
footballer.hadWc = false;

var officer = new Object();
officer.name = 'shibu';
officer.sal = 100000;
officer.id = 1;

var chappel = new Object();
chappel.firstName = 'vkc';
chappel.lastName = 100;
chappel.sal = 10000;


var animal = new Object()
animal.name = "elephent"
animal.weight = 100
animal.height = 300



console.log("******************Object using new keyword*****************************");
for (const key in person) {
    if (person.hasOwnProperty(key)) {
        console.log(key,person[key]);
         
        
    }
}

for (const key in bike) {
    if (bike.hasOwnProperty(key)) {
        console.log(key,bike[key]);
         
        
    }
}

for (const key in car) {
    if (car.hasOwnProperty(key)) {
        console.log(key,car[key]);
         
        
    }
}

for (const key in student) {
    if (student.hasOwnProperty(key)) {
        console.log(key,student[key]);
         
        
    }
}

for (const key in cricketer) {
    if (cricketer.hasOwnProperty(key)) {
        console.log(key,cricketer[key]);
         
        
    }
}
for (const key in footballer) {
    if (footballer.hasOwnProperty(key)) {
        console.log(key,footballer[key]);
         
        
    }
}

for (const key in officer) {
    if (officer.hasOwnProperty(key)) {
        console.log(key,officer[key]);
         
        
    }
}

for (const key in chappel) {
    if (chappel.hasOwnProperty(key)) {
        console.log(key,chappel[key]);
         
        
    }
}

for (const key in animal) {
    if (person.hasOwnProperty(key)) {
        console.log(key,animal[key]);
         
        
    }
}
for (const key in student) {
    if (student.hasOwnProperty(key)) {
        console.log(key,student[key]);
         
        
    }
}
for (const key in pen) {
    if (pen.hasOwnProperty(key)) {
        console.log(key,pen[key]);
         
        
    }
}





    var items =[ {
                    id : 1,
                    name : "Lipstick",
                    price : 850
                 },
                 {
                    id : 2,
                    name : "Eyeliner",
                    price : 500   
                 },
                 {
                    id : 3,
                    name : "BeardOil",
                    price : 900  
                 },
                 {
                    id : 4,
                    name : "Rakhi",
                    price : 250  
                 }
               ]


var newArray = items.filter(val =>val.price>500)
console.log("new Array",newArray);




            
var mArray = items.map(val =>{
    var newA =new Object()
    newA.name = val.name
    newA.id = val.id
    
    newA.price =val.price + 50
    return newA
})

console.log(mArray);
console.log(items);




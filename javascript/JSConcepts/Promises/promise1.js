console.log("JS Started");

const myPromise1 =  new Promise(function (resolve,reject) {
    if(20>10){
        const data = [100,200,300,400]
        resolve(data)
    }else{
        reject("Failed to fetch the data")
    }
})

myPromise1.then(function(data) {
    console.log("Data is ",data);
    const filteredData = data.filter(val => val > 200)
    return filteredData
    
}).then(function(filterData) {
    console.log("Filterd Data is",filterData);
    
}).catch(function(error) {
    console.log("Error is ",error);
    
})
console.log("JS Ended");


console.log("JS Started");

const myPromise1 =  new Promise( (resolve,reject) =>  {
    if(20>10){
        const data = [100,200,300,400]
        resolve(data)
    }else{
        reject("Failed to fetch the data")
    }
})

myPromise1.then(data => {
    console.log("Data is ",data);
    const filteredData = data.filter(val => val > 200)
    return filteredData
    
}).then(filterData => console.log("Filterd Data is",filterData)

).catch(error => console.log("Error is ",error))

console.log("JS Ended");


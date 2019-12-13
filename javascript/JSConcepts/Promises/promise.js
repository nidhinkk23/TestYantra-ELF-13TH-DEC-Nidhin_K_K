console.log('js Started');
//Promise is Asynchronus
const myPromise = new Promise(function (resolve, reject) {
    if (20 > 10) {
        resolve('20 is grater than 10')//if it exec directly go to .then
    } else {
        reject('20 is not grater than 10')
    }
})

myPromise.then(function (success) {
    console.log("Success");

}).catch(function (error) {
   
    console.log("error");

})


console.log('js Ended');


function first(callback) {
   setTimeout(function() {
       console.log("First fn");
       callback()
   },0)
    
}
function second() {
    console.log("second function");
    
}
first(second)


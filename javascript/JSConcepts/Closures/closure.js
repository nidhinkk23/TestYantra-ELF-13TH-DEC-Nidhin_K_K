function outer() {
    let num = 10;
    function inner() {
        console.log("Number ",num);//outr fn parm can access by the innr fn even if returned and removed from the stack
        num++
        
        
    }
   return inner
}

let innerFunc = outer()
innerFunc();
innerFunc();
innerFunc();
// inner() can't call directly -> for privacy
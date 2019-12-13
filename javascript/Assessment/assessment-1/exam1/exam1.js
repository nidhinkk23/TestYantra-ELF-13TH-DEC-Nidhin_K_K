 //function that display value 
 function dis(val) 
 { 
     document.getElementById("result").value+=val //Taking the value from input id="result"
      } 
   
 //function that evaluates the digit and return result 
 function solve() 
 { 
     let x = document.getElementById("result").value 
     let y = eval(x) 
    /*  eval() is a global function in JavaScript that 
     evaluates a specified string as JavaScript code and executes it.
      */
     document.getElementById("result").value = y 
 } 
   
 //function that clear the display 
 function clr() 
 { 
     document.getElementById("result").value = "" 
 } 
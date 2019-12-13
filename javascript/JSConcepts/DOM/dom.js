let pElement = document.getElementById("demo")
console.log(pElement);
let pText = pElement.textContent;
console.log(pText);
pElement.textContent = "Hi Everyone"
console.log(pElement.textContent);
console.log("*****************************");

let testElement = document.querySelector(".test")
console.log(testElement.textContent);

let testElements = document.getElementsByClassName("test")
console.log(testElements);

for (let value of testElements) {
   console.log(value.textContent);
   if(value.textContent === "FaceBook"){
    value.textContent = "Instagram"
   }
}


let h2Elements = document.querySelectorAll("h2")
console.log(h2Elements);
for (const value of h2Elements) {
    console.log(value.textContent);
   
        // value.textContent = value.textContent.replace(" ","-")
        let arr = value.textContent.split(" ")
      let String = arr.join("-")
      console.log(String);
      
      value.textContent = String
}

let names = document.getElementsByName("nm")
console.log(names);
for (let value of names) {
    console.log(value.textContent);
    
}

let tags = document.getElementsByTagName("p")
console.log(tags);


document.write("Good Afternoon")

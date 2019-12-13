let element = document.createElement("p")
element.textContent = "JavaScript is Easy"
console.log(element);
document.body.appendChild(element)

const ulElement = document.createElement("ul")
ulElement.textContent = 'Lipsticks'

const li1Element = document.createElement("li")
li1Element.textContent = 'Lakme'

const li2Element = document.createElement("li")
li2Element.textContent = 'Loreal'

ulElement.appendChild(li1Element)
ulElement.appendChild(li2Element)

console.log(ulElement);


document.body.appendChild(ulElement)


const olElement = document.createElement("ol")
olElement.textContent = 'Lipsticks'

const li1Elemen = document.createElement("li")
li1Elemen.textContent = 'Lakme'

const li2Elemen = document.createElement("li")
li2Elemen.textContent = 'Loreal'

olElement.appendChild(li1Elemen)
olElement.appendChild(li2Elemen)

console.log(olElement);


document.body.appendChild(olElement)
array = ["btn1","btn2","btn3","btn4","btn5","btn6","btn7","btn8","btn9","btn10"]
for (let i = 0; i < 10; i++) {
    const butt = document.createElement("button")
    // butt.textContent = "button"+i
    butt.textContent = array[i]
    document.body.appendChild(butt)
   

}



let items = `
            <ul>
                <li>A</li>
                <li>B</li>
                <button>Click here</button>
            </ul>
            `
let divElement = document.getElementById('test')            
divElement.innerHTML=items;
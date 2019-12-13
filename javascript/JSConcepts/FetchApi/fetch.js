
    var div1 = document.createElement("div")
    var div2 = document.createElement("div")
    var img = document.createElement("img")
    var p = document.createElement("p")

    div1.className = "card container col-md-6 mt-5"
    div1.style.width = "18rem"
    div2.className = "card-body"
    p.className = "card-text"
    img.className = "card-img-top"

    
    img.src = "IMG-20160912-WA0017.jpg"

    div1.appendChild(img)
    div1.appendChild(div2)
    div2.appendChild(p)
    document.body.appendChild(div1)




fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(json => {

        for (let i = 0; i < 6; i++) {


            p.textContent =  json[i].title




        }

    }).catch(err => err)

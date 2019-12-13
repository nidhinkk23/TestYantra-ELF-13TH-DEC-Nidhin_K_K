
const div = document.createElement("div")



function addCard(msg) {
    const div1 = document.createElement("div")


    const div2 = document.createElement("div")
    const div3 = document.createElement("div")

    const img = document.createElement("img")
    const p = document.createElement("p")


    div1.classList = " float-left mr-5 m-3"
    div2.classList = "card col-md-12  "
    div3.className = "card-body"

    div2.style.width = "18rem"

    img.className = "card-img-top"
    p.className = "card-text"

    div3.appendChild(p)
    div2.appendChild(img)
    div2.appendChild(div3)

    div1.appendChild(div2)
    div.appendChild(div1)
    img.src = "https://cdn.pixabay.com/photo/2019/11/29/13/34/dog-4661341__340.jpg"
    p.textContent = msg
    document.body.appendChild(div)



}


fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(json => {
        let arr = []
        for (let i = 0; i < 6; i++) {

            arr.push(json[i])
            console.log(arr);


        }
        return arr
    })
    .then(json => {

        for (let i = 0; i < 6; i++) {

            addCard(json[i].title)
        }

        const input = document.getElementById('input')
        input.addEventListener('keyup', search)

        function search() {



            for (let i = 0; i < 6; i++) {
               
                if (json[i].title.startsWith(input.value.trim()) && input.value.trim().length != 0) {
                    console.log(json[i].title);

                    div.innerHTML = ""


                    addCard(json[i].title)

                    

                }else if(input.value.trim().length == 0){
                    // const p = document.createElement("p")
                    // p.classList = "offset-5"
                    // div.appendChild(p)
                    // p.textContent = "Invalid"
                    // div.innerHTML = p

                    
                }
                

            }
        }




    }).catch(err => err)


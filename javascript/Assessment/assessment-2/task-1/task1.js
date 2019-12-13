const div = document.createElement("div")
const input = document.getElementById('input')

input.addEventListener('keyup', search)



function addCard(msg, image) {

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
    img.src = image
    p.textContent = msg
    document.body.appendChild(div)


}
function search() {

    fetch(`http://www.omdbapi.com/?s=%27${input.value}&apikey=7a488851`)
        .then(response => response.json())
        .then(json => {
            console.log(json);
            
            let arr = []
            for (let i = 0; i < json.Search.length; i++) {
               
                

                arr.push(json.Search[i])
                console.log(arr.length);


            }
            return arr
        })
        .then(json => {
                // console.log(json);
                if(json !== undefined){
                div.innerHTML = ""

                    for (let i = 0; i < json.length; i++) {

                       
                        addCard(json[i].Title, json[i].Poster)
        
           
        
        
                    }
        
                }else{
                div.innerHTML = "No result found"
                    
                }
           
        }).catch(err => err)
}












const img1 = document.getElementById("img1")
img1.style.width = '200%'
img1.style.height = '100%'

const img2 = document.getElementById("img2")
img2.style.height = '100%'

const img3 = document.getElementById("img3")
img3.style.width = '200%'

img1.addEventListener("mouseover", addStyle)
img1.addEventListener("mouseout", removeStyle)
img1.addEventListener("click", addElement)


function addStyle() {

    img2.style.width = '200%'
    img3.style.width = '100%'
    img2.style.height = '100%'
    img3.style.height = '100%'


    img2.src = "https://cdn.pixabay.com/photo/2016/07/30/09/56/wheat-1556698__340.jpg"
    img3.src = "https://cdn.pixabay.com/photo/2017/11/14/01/00/thankful-2947263__340.jpg"
    

}
function removeStyle() {

    img2.src="https://cdn.pixabay.com/photo/2018/11/12/18/44/thanksgiving-3811492__340.jpg"
    img3.src="https://cdn.pixabay.com/photo/2019/11/12/15/47/aesthetic-4621334__340.jpg"
    img2.style.width = '200%'
    img3.style.width = '200%'


}
function addElement() {

    const row2 = document.getElementById("row2")
    const col12 = document.getElementById("col12")

    const img3 = document.createElement("img")
    const img4 = document.createElement("img")
    img3.src = "https://cdn.pixabay.com/photo/2016/07/30/09/56/wheat-1556698__340.jpg"
    img4.src = "https://cdn.pixabay.com/photo/2017/11/14/01/00/thankful-2947263__340.jpg"


    col12.appendChild(img3)
    row2.appendChild(col12)

    document.body.appendChild(row2)
    col22.appendChild(img4)

    row2.appendChild(col22)

    document.body.appendChild(row2)

   
   

}
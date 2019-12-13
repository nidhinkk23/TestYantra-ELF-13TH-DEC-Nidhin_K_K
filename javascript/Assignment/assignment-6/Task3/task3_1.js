const home = document.getElementById("home")
home.addEventListener('click', addImage)
const image = document.createElement('img')
function addImage() {
    
    const id1 = document.getElementById('id1')
    image.src = "girl-4655079__340 (1).jpeg"
     image.style.width = "100%"
    id1.innerHTML = ""
    id1.appendChild(image)
}


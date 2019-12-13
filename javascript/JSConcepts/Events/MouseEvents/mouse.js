function addStyle() {
    const element = document.getElementById('add')

    element.className = 'addStyle'
}
function removeStyle() {
    const element = document.getElementById('add')
    element.className = 'removeStyle'
}


const bElement = document.getElementById('one')
bElement.onclick = function() {
    alert('You clicked Me')
}
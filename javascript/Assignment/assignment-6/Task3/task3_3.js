const table = document.createElement("table");
const tBody = document.createElement("tbody");
const thead = document.createElement("thead");

const tr1 = document.createElement("tr");

const th1 = document.createElement("th");
const th2 = document.createElement("th");
const th3 = document.createElement("th");

th1.textContent = "Name"
th2.textContent = "Mob no."
th3.textContent = "Password"

const button1 = document.createElement("button")
button1.type = "button"
button1.textContent = "ClearAll"

button1.classList = "btn btn-outline-dark col-md-2 offset-md-5 mb-5 mt-5 "

table.appendChild(thead)
thead.appendChild(tr1)


tr1.appendChild(th1)
tr1.appendChild(th2)
tr1.appendChild(th3)
table.classList = 'table container border offset-3 mt-3  col-md-6'


function addRow() {
    for (let i = 0; i < localStorage.length; i++) {

        let test = localStorage.getItem(localStorage.key(i)).split(",")


        const tr2 = document.createElement("tr");
        const td1 = document.createElement("td");
        const td2 = document.createElement("td");
        const td3 = document.createElement("td");



        td1.textContent = test[0]
        td2.textContent = test[1]
        td3.textContent = test[2]

        table.appendChild(tBody)
        tBody.appendChild(tr2)
        tr2.appendChild(td1)
        tr2.appendChild(td2)
        tr2.appendChild(td3)


    }

}

addRow()

const showAccount = document.getElementById('showAccount')
showAccount.addEventListener("click", function () {
    
    id1.innerHTML = ""

    id1.appendChild(table)
    id1.appendChild(button1)
})
button1.addEventListener("click", function () {

    localStorage.clear()
    setInterval(function () {
        window.location.reload(1);
    }, 30);


})
 
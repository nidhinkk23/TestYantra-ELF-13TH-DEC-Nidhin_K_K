console.log("Un Orderd List");

let itemsli = `
            <ul>Items
                <li>Watch</li>
                <li>Mobile</li>
                <li>Laptop</li>
            </ul>
            `
let divElementli = document.getElementById('test1')            
divElementli.innerHTML=itemsli;

console.log("Orderd List");

let itemsol = `
            <ol>Items
                <li>Watch</li>
                <li>Mobile</li>
                <li>Laptop</li>
            </ol>
            `
let divElementol = document.getElementById('test2')            
divElementol.innerHTML=itemsol;


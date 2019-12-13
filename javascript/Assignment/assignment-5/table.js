let tables = `
<table>
<tr>
    <th>Name</th>
    <th>Age</th>
    <th>Address</th>
    <th>DOB</th>
</tr>
<tr>
    <td>Amal</td>
    <td>22</td>
    <td>AK House</td>
    <td>22/3/97</td>
</tr>
<tr>
    <td>Sarath</td>
    <td>22</td>
    <td>SS House</td>
    <td>24/9/97</td>
</tr>
</table>

            `

  
let t = document.getElementById("test3")
t.className = 'table'
            
let divElementtable = document.getElementById('test3')            
divElementtable.innerHTML=tables;            


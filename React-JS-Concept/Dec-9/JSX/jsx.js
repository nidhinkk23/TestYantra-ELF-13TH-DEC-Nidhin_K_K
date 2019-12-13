//JSX Syntax
const element = <h1>Hello World</h1>

const userName = 'Dulquer'
const greet = <h1>Hello {userName}</h1>//Interpolation
const items = ['Deodrant','Saree','Shoe']


const list = <ul>
                   {
                       items.map((item,index) =>{
                           return <li key = {item+index}>
                               {item}
                           </li>
                       }
                       )
                   }
             </ul>


ReactDOM.render(list, document.getElementById('react-container'))
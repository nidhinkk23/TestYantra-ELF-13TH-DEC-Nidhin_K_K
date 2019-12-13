function App(props) {
    return (
        <div>
            <Home homeName='Oila'/>
            <List list ={['Book','Pen','Bag']} />
        </div>
    )
}
function List(props) {
    return(
        <ul>
            {props.list.map((val,index)=>{
                return <li key ={val+index} >{val}</li>
            }

            )}
        </ul>
    )
}
function Home(props) {
    return (
        <div>
            {props.homeName}
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('react-container'))

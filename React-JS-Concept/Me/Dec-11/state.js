class Welcome extends React.Component{
    state = {
        name : 'nidhin',
        isme : false

    }
    constructor(props){
        super(props)
        console.log(this);
        
    }
    changeState = () =>{
        console.log(this);
        
        this.setState({
           isme : !this.state.isme
        })
        console.log(this);
        
    }

    


    render(){
        const me = <h1>its nidhin</h1>
        const meNot = <h1>its not nidhin</h1>

        return(
            <div>
                <h1>{this.state.isme?me:meNot} </h1>
                <button onClick={this.changeState} >click</button>
            </div>
        )
    }
}

ReactDOM.render(<Welcome/>,document.getElementById('react-container'))
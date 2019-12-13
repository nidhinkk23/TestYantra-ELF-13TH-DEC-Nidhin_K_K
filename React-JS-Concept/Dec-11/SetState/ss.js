class Welcome extends React.Component{
    state = {
        name : 'Nidhin',
        show : false
    }

    constructor(props){
        super(props)
        console.log("Inside Constructor",this);
        
    }
    
    //Best way of writing methods
    handleClick = () =>{//Use this way always
        console.log("Inside Handle Click",this);
        
        console.log("Inside arrow fn ",this.state.name);
        //Never ever mutata the state directly
        // this.state.name = "shibu"
        //Use this One
        this.setState({
            name : "Shibu"
        })
        
    }
    
    render(){
        console.log("Inside render",this);
        
        return(
            <div>
            <h1>Hello , {this.state.name} </h1>
            <button onClick = {this.handleClick} >Click here to change the name</button>
            
            </div>
        )
    }
}
ReactDOM.render(<Welcome />,document.getElementById('react-container'))

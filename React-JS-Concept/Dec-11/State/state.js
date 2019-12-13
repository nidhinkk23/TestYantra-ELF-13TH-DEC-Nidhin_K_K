class Welcome extends React.Component{
    state = {
        name : 'Nidhin'
    }

    constructor(props){
        super(props)
        console.log(this);
        this.showMessage = this.showMessage.bind(this)
        
    }
    greet(){
        console.log("Helloo",this.state.name);
        
    }
    showMessage(){
        console.log("Binding in Constructor",this.state.name);
        
    }
    //Best way of writing methods
    handleClick = () =>{//Use this way always

        console.log("Inside arrow fn ",this.state.name);
        
    }
    
    render(){
        return(
            <div>
            <h1>Hello , {this.state.name} </h1>
            <button onClick = {() =>alert("Hello")} >Click</button>
            <button onClick = {this.greet.bind(this)} >Bind</button>
            <button onClick = {this.showMessage} >Binding in constructor</button>
            <button onClick = {this.handleClick} >Using in Arrow Function</button>
            
            </div>
        )
    }
}
ReactDOM.render(<Welcome />,document.getElementById('react-container'))

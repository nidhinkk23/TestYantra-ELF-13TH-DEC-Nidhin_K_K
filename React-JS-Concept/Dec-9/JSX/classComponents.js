class Header extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return <p>This is Header </p>
    }
}

class Content extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return <p>Welcome,{this.props.userName} </p>
    }
}

class Footer extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return <p>This is Footer </p>

    }
}

ReactDOM.render(<div>
                    <Header /><Content userName = 'Salman'/><Footer/>
                    
                </div>, 
                document.getElementById('react-container'))


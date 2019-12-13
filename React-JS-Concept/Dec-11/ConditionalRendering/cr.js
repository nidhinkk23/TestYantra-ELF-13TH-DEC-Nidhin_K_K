class ConditionalRendering extends React.Component {
    constructor(props) {
        super(props)
        this.state = {//inside constructor use this.
            adminName: 'Chandru',
            userName: 'Guru',
            isAdmin: false,
            adminId: 100,
            userId: 200
        }

    }
    changeUserAdmin = () =>{
        this.setState({
            isAdmin : !this.state.isAdmin
        })
    }
    navigateTo = (event) =>{
        console.log(event);
        
        event.preventDefault()
    }


    render() {
        const admin = <div>
            <h1>{this.state.adminName} </h1>
            <h4>{this.state.adminId} </h4>

        </div>
        const user = <div>
            <h1>{this.state.userName} </h1>
            <h4>{this.state.userId} </h4>

        </div>



        return (
            <div>
                <h1>
                    {this.state.isAdmin ? admin : user}
                </h1>
                <p>Home</p>
                <p>Login</p>
                <button onClick ={this.changeUserAdmin} >CLICK</button>
                <a href = "http://www.google.com" onClick={this.navigateTo} >NAvigate to google</a>

            </div>

        )




        /* return(
            <div>
            <h1>
                {this.state.isAdmin?this.state.adminName:this.state.userName}
            </h1>
            <p>Home</p>
            <p>Login</p>
            <h4>
            {this.state.isAdmin?this.state.adminId:this.state.userId}

            </h4>

            </div>

        ) */
        /*  if(this.state.isAdmin){
             
             return (
                 
                 <h1>Hello , {this.state.adminName} </h1>
                 
                 )
         }else{
             return (
                 <h1>Hello , {this.state.userName} </h1>
 
                )
 
         } */

        /* return this.state.isAdmin?<h1>{this.state.adminName} </h1>:
        <h1>{this.state.userName}</h1> */
    }


}
ReactDOM.render(<ConditionalRendering />, document.getElementById('react-container'))

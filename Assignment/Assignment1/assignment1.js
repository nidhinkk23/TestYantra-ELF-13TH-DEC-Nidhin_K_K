/* function Header(props) {


    const header = <ul className="nav bg-dark" >
        <li className="nav-item">
            <button onClick={homeContent} className="nav-link active ml-5 " id="home" href="#">Home</button>
        </li>
        <li className="nav-item">
            <button onClick={createContent} className="nav-link ml-5" id="createAccount" href="#">CreateAccount</button>
        </li>
        <li className="nav-item">
            <button onClick={showContent} className="nav-link ml-5" id="showAccount" href="#">showAccount</button>
        </li>
    </ul>

    return header



}
 */
class Appclass extends React.Component {
    constructor(props) {
        super(props)
        this.state = {//inside constructor use this.
            isHome: false,
            isCreate: false,
            isLogin: false,

        }
    }
    home = () => {
        this.setState({
            isHome: true,
            isCreate:false,
            isLogin:false
        })
        return <h>This is HomeContent</h>
    }
    create = () => {
        this.setState({
            isCreate: true,
            isHome : false,
            isLogin:false
        })
        return <h>This is HomeContent</h>
    }
    login = () => {
        this.setState({
            isLogin: true,
            isCreate:false,
            isHome:false
        })
        return <h>This is HomeContent</h>
    }


    render() {
        
        const empty = ""
        const home = <div><img className = "m-5"src="https://cdn.pixabay.com/photo/2019/11/02/20/50/camera-4597415__340.jpg"width="40%"></img></div>
        const create = <div>
                            <form className = "m-5 form-group ">
                                <h4>FirstName</h4>
                                <input className="form-control bg-primary"type="text"></input>
                                <h4>LastName</h4>
                                <input className="form-control bg-primary"type="text"></input>
                                <h4>UserName</h4>
                                <input className="form-control bg-primary"type="text"></input>
                                <h4>Password</h4>
                                <input className="form-control bg-primary"type="text"></input>
                                <h4>ConfirmPassword</h4>
                                <input className="form-control bg-primary"type="text"></input>
            
                            </form>
               
               
                        </div>
        const login =   <div className="m-5 form-group ">
                            <form >
                                
                                
                                <h4>UserName</h4>
                                <input className="form-control bg-primary"type="text"></input>
                                <h4>Password</h4>
                                <input className="form-control bg-primary"type="text"></input>
                                
                            </form>
               
                        </div>

        

        return (<div>
            <ul className="nav bg-dark" >
                <li className="nav-item">
                    <button onClick={this.home} className="nav-link active ml-5 btn-dark" id="home" href="#">Home</button>
                </li>
                <li className="nav-item">
                    <button onClick={this.create} className="nav-link ml-5 btn-dark" id="createAccount" href="#">CreateAccount</button>
                </li>
                <li className="nav-item">
                    <button onClick={this.login} className="nav-link ml-5 btn-dark" id="showAccount" href="#">LoginAccount</button>
                </li>

            </ul>
            {this.state.isHome ? home : empty}
            {this.state.isCreate ? create : empty}
            {this.state.isLogin ? login : empty}
            <Footer/>
        </div>


        )

    }


}/* 
function createContent(props) {
  
    console.log("cvcvcccc");
    
    const cContent = <h1>This is create Content</h1>

    return cContent
}
function homeContent(props) {
    console.log("1111111");
    

    const hContent = <h1>This is home Content</h1>

    return hContent
}
function showContent(props) {
    console.log("sssss");

    
    const sContent = <h1>This is show Content</h1>

    return sContent
}


class App extends React.Component {
    constructor(props) {
        super(props)
       
    }
    changeContent = ()=>{
        console.log("88888888888888888");
        
        showContent.onClick?showContent():createContent()
    }
    

    render() {
        return  <div>
                    <Header /><h1> { showContent.onClick?createContent():homeContent() } </h1>  <Footer />
                </div>
    }
}
*/
function Footer(props) {
    const footer = <footer className="fixed-bottom page-footer font-small blue ">


        <div className="footer-copyright text-center py-3 bg-primary">© 2018 Copyright:
                        <a href="https://mdbootstrap.com/education/bootstrap/"> MDBootstrap.com</a>
        </div>


    </footer>
    return footer
}


 
ReactDOM.render(<Appclass />

    ,
    document.getElementById('react-container'))
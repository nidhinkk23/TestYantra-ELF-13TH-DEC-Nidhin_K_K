

class Appclass extends React.Component {
    constructor(props) {
        super(props)
        this.state = {//inside constructor use this.
            isHome: false,
            isCreate: false,
            isLogin: false,

        }
    }

    common = (par) => {
        console.log("123");
        
        if (par[0] === "home") {
            this.setState({
                isHome: true,
                isCreate: false,
                isLogin: false
            })


        } else if (par[0] === "create") {
            create = () => {
                this.setState({
                    isCreate: true,
                    isHome: false,
                    isLogin: false
                })

            }
        }  else {
            login = () => {
                this.setState({
                    isLogin: true,
                    isCreate: false,
                    isHome: false
                })

            }
        } 
    }


    render() {
        const details = [{
            name: 'nidhi',
            mob: 1234
        }, {
            name: 'shibu',
            mob: 1234
        }, {
            name: 'sarath',
            mob: 1234
        }
        ]
       

        const empty = ""
        const home = <div>
            
            <h4>Name: {details[0].name} </h4>
            <h4>Name: {details[0].mob} </h4>

        </div>
        const create = <div>
            <h4>Name: {details[1].name} </h4>
            <h4>Name: {details[1].mob} </h4>


        </div>
        const login =  <div>
        <h4>Name: {details[2].name} </h4>
        <h4>Name: {details[2].mob} </h4>


    </div>



        return (<div>
            <ul className="nav bg-dark" >
                <li className="nav-item">
                    <button onClick={this.common.bind(this, "home")} className="nav-link active ml-5 btn-dark" id="home" href="#">Home</button>
                </li>
                <li className="nav-item">
                    <button onClick={this.common.bind(this, "create")} className="nav-link ml-5 btn-dark" id="createAccount" href="#">CreateAccount</button>
                </li>
                <li className="nav-item">
                    <button onClick={this.common.bind(this, "login")} className="nav-link ml-5 btn-dark" id="showAccount" href="#">LoginAccount</button>
                </li>

            </ul>
            {this.state.isHome ? home : empty}
            {this.state.isCreate ? create : empty}
            {this.state.isLogin ? login : empty}
            <Footer />
        </div>


        )

    }


}
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
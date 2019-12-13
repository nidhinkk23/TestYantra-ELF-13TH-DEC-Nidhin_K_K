function Header(props) {
    return <h1>This is Header</h1>
}

function Content(props) {
    return <p>Welcome,{props.userName}</p>
}

function Footer(props) {
    return <p>This is Footer</p>
}

ReactDOM.render(<div>
                    <Header /><Content userName = 'Salman'/><Footer/>
                </div>,
                document.getElementById('react-container'))
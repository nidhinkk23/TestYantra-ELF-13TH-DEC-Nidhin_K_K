function Header({headerName}) {
    // console.log("props ",props);
   
    console.log(headerName);

    // return React.createElement('h1',null,props.headerName)
    return React.createElement('h1',null,headerName)

}

const header = React.createElement(Header,{

    headerName : 'This is Header',
    id : 'header',
    show : true

},'Header Component')

function Footer(props) {
    return React.createElement('h1',null,'This is footer')
}

function Content(props) {
    return React.createElement('p',null,'This is content')
    
}

const content =  React.createElement(Content)
const footer =  React.createElement(Footer)


const homePage = React.createElement('div',null,header,content,content,footer)//reuse the components

ReactDOM.render(homePage,document.getElementById('react-container'))
class Header extends React.Component {
       
        render(){
            return React.createElement('h1',null,'this is header')
        }
}

const header = React.createElement(Header,{
    headerValue : 'Hello'
})
class Content extends React.Component {
   
    render(){
        return React.createElement('h1',null,'this is Content')
    }
}

const content = React.createElement(Content)



class Footer extends React.Component {
    
    render(){
        return React.createElement('h1',null,'this is Footer')
    }
}

const footer = React.createElement(Footer)







ReactDOM.render(React.createElement('div',null,header,content,footer),document.getElementById('react-container'))
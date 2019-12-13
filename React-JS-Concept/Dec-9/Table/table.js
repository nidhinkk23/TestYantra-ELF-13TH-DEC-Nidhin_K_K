/* const table = React.createElement('table', { id: 'table' },
    React.createElement('tr', null, 
    React.createElement('th',null,'Name'),
    React.createElement('th',null,'Phone no.')),
    React.createElement('tr',null,
    React.createElement('td',null,'name1'),
    React.createElement('th',null,'Phone no.1')),
    React.createElement('tr',null,
    React.createElement('td',null,'name1'),
    React.createElement('th',null,'Phone no.1')),


    
    React.createElement('ul', { id: 'hot drinks' },
    React.createElement('li', { id: 'coffee' }, 'Coffee'),
    React.createElement('li', { id: 'tea' }, 'Tea'))
    ) */



const persons = [{

    Name: 'sarath',
    mob: 1234
},
{
    Name: 'amal',
    mob: 1234
}


]

const mobiles = ['Honor', 'Oppo', 'Samsung', 'Nokia',
    'Redmi', 'Lenovo', 'Oppo']


const personList = React.createElement('table', {
    className : 'tableBorder'
},
    React.createElement('thead',null,
        React.createElement('th', {
            className : 'header'
        }, 'Name'),
        React.createElement('th', null, 'mobno.')),




    persons.map((person, index) => {
        return React.createElement('tbody',
            {
                key: `${person} ${index}`,
                className : 'tableBody'
            },
            React.createElement('td', null, persons[index].Name),
            React.createElement('td', null, persons[index].mob))


    })

)

const mobileList = React.createElement('ul', null, mobiles.map((mobile, index) => {
    return React.createElement('li',
        {
            key: `${mobile} ${index}`
        }, mobile)

}))

const ele = React.createElement('div', null, personList, mobileList)


ReactDOM.render(ele,
    document.getElementById('react-container'))


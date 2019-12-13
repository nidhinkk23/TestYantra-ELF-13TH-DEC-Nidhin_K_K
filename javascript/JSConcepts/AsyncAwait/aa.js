//***imp  ES7*


/* function getData() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => console.log(json))

} */
//To handle exceptn use try catch or finally
//await only use within the async fn
//and also should be promise 
//it wait for the exctn of that apis
async function getData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data = await response.json()
    console.log("data ", data);

}

getData()
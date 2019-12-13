//***imp *



async function getData() {
    console.log("Get Data Started");
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/todos')
        const data = await response.json()
        console.log("data ", data);
    
    }catch(err){
        console.log('Error',err);
        
    }finally{
    console.log("Finally executed");

    }
    console.log("Get Data Ended");

   
}

getData()
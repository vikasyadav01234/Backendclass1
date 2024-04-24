const express = require('express');
const app = express();

app.listen(3000, ()=>{
    console.log("server startedbat port no. 3000")
});
app.get('/', (req,res)=> {
    res.send("hello jee , Kaise Ho Sarre")
});

app.post('/api/cars', (request,response)=> {
    const {name, brand} = request.body;
    console.log(name);
    console.log(brand);
})
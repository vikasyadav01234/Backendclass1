const express = require('express');
const app = express();
//ser
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.listen(5000, ()=>{
    console.log("server started at port no. 3000")
});
app.get('/', (req,res)=> {
    res.send("hello jee , Kaise Ho Sarre")
});

app.post('/api/cars', (request,response)=> {
    const {name, brand} = request.body;
    console.log(name);
    console.log(brand);
    response.send("Car Submitted Successfully");
})
//database
const mongoose = require ('mongoose');

mongoose.connect('mongodb://localhost:27017/myDatabase', {
    useNewurlParser:true,
    useUnifiedTopology:true
})
.then()
const express=require('express');
const app=express();
require('./config1');
const Product = require('./product2');

app.use(express.json());
app.post('/create',async(req,res)=>{
    let data= new Product(req.body);
    let result=await data.save();
    res.send(result);
    console.log(result);
});

app.listen(5200);
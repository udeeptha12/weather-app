const express = require('express');

const app =express();

app.get("/",(req,res)=>{
    res.send('hello from express')
});

app.get("/api",(req,res)=>{
    res.send('from api')
})
app.get("*",(req,res)=>{
    res.send('Not Found')
})
app.listen(3000,()=>console.log('server is on 3000'));
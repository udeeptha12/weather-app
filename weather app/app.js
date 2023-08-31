const express = require('express');
const weather = require('./utils/weather');
const geo = require('./utils/geo');

const app =express();

app.get('/',(req,res)=>{
  res.send('welcome');
})
app.get('/help',(req,res)=>{
  res.send('help');
})
app.get('/about',(req,res)=>{
  res.send('about');
})
app.get('/weather',(req,res)=>{
  if (!req.query.address){
    res.send({error:'Address not found!'});
  }
        geo(req.query.address)
        .then((data)=>{
          return weather(data.lat,data.lon)
      })
        .then((data)=>{
          res.send(data)
        })
        .catch((error)=>{
          res.send(error);
      })
  
})
app.get('*',(req,res)=>{
  res.send('page not found');
})


app.listen(3000,()=>console.log('server is on 3000'));
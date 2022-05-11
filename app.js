const express = require('express');
const res = require('express/lib/response');
const app = express();

//middlewares
app.use('/next', () =>{
    console.log('this is midldleware running');
});

app.get('/',(reg,res) =>{
    res.send('We are on home');
});

app.get('/next',(reg,res)=>{
    res.send('posting next');
})

app.listen(3000);
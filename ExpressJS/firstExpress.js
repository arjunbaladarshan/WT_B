const express = require('express');

const app = express();

// app.METHOD(PATH,HANDLER)
app.all('/ho?me',(req,res,next)=>{
    res.write("Hello world from");
    next();
})

app.get('/home',(req,res)=>{
    res.end(' get method');
});

app.post('/home',(req,res)=>{
    res.end(' post method');
});

app.delete('/home',(req,res)=>{
    res.end(' delete method');
});

app.listen(3000,()=>{
    console.log('Server started @ 3000');
})
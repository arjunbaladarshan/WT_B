const express = require('express');

const app = express();

const names = ['arjun','bala','darshan','college','rajkot','gujarat','INDIA']

app.get('/student/:index',(req,res)=>{
    res.send(names[req.params.index]);
})

app.listen(3000);
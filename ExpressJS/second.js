const express = require('express');

const app = express();

const students = ['arjun','bala','raklpt','gujarat','INDIA'];

app.get('/student/:index',(req,res)=>{
    res.send(students[req.params.index]);
});

app.listen(3000,()=>{
    console.log("Server started @ 3000");
})
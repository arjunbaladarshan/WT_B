const express = require('express');
const app = express();

const students = ['arjun','bala','raklpt','gujarat','INDIA'];

app.get('/student',(req,res)=>{
    res.send(students);
})
app.get('/student/:index',(req,res)=>{
    res.send(students[req.params.index]);
});
app.post('/student/:name',(req,res)=>{
    students.push(req.params.name);
    res.send(students);
});
app.delete('/student/:index',(req,res)=>{
    students.splice(req.params.index,1);
    res.send(students);
});
app.patch('/student/:index/:newname',(req,res)=>{
    students[req.params.index] = req.params.newname;
    res.send(students);
})

app.listen(3000,()=>{
    console.log("server started at 3000");
})
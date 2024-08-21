const express = require('express')
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded());

app.use('/admin',(req,res,next)=>{
    console.log("req.originalUrl",req.originalUrl);
    console.log("req.baseUrl",req.baseUrl);
    console.log("req.path",req.path);
    if(req.body.UN=="arjun" && req.body.PW=="bala"){
        next();
    }
    else{
        res.send("Unauthorized");
    }
});

app.get('/admin/first',(req,res)=>{
    res.send("First from admin")    
});

app.get('/admin/second',(req,res)=>{
    res.send("Second from admin")
});

app.get('/student/first',(req,res)=>{
    res.send("First from student")
});

app.get('/student/second',(req,res)=>{
    res.send("Second from student")
})


app.get('/demo',(req,res,next)=>{
    console.log("First Function");
    next('route');
}, (req,res)=>{
    res.send("From Second Function")
});

app.get('/demo',(req,res)=>{
    res.send('From Anothor Route');
})

app.listen(3000,()=>{
    console.log("Server started @ 3000");
})
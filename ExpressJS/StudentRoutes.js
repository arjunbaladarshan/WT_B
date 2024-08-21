const express = require('express');
const router = express.Router();

router.get('/first',(req,res)=>{
    res.send("Stu 1");
});

router.get('/second',(req,res)=>{
    res.send("Stu 2");
});

router.get('/third',(req,res)=>{
    res.send("Stu 3");
});

module.exports = router;
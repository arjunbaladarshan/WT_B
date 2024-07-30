const express = require('express');
const app = express();
const isValid = false;
app.all('/home',(req,res,next)=>{
	console.log('this is a valid user');
	if(isValid){
		next();
	}
	else{
		res.send('Invalid user')
	}
});

app.get('/home',(req,res)=>{
	res.send('Home with get method');
});

app.post('/home',(req,res)=>{
	res.send('Home with post method');
});

app.delete('/home',(req,res)=>{
	res.send('Home with delete method');
});

app.listen(3000,()=>{
	console.log('server strated @ 3000')
})
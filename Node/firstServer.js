const http = require('http')

const server = http.createServer((req,res)=>{

	res.setHeader('Content-Type','text/html');
	if(req.url=="/favicon.ico"){
		res.end(' ');
	}
	else if(req.url=="/home" && req.method=="GET"){
		console.log("METHOD = ",req.method);
	
		res.statusCode = 200;
		res.write('Welcome home using get');
		res.write("<br/>");
		res.write('by byu')
		res.end();
	}
	else if(req.url=="/home" && req.method=="POST"){
		console.log("METHOD = ",req.method);
	
		res.statusCode = 200;
		res.write('Welcome home using post');
		res.write("<br/>");
		res.write('by byu')
		res.end();
	}
	else if(req.url=="/contact"){
		console.log("METHOD = ",req.method);
	
		res.statusCode = 200;
		res.end('my number is = <h2>12356432131</h2>');
	}
	else if(req.url=="/about"){
		console.log("METHOD = ",req.method);
	
		res.statusCode = 200;
		res.end('this is my aboutus page');
	}
	else{
		console.log("METHOD = ",req.method);
	
		res.statusCode = 404;
		res.end('Hello world - rajkot, Gujarat, INDIA, Earth');
	}

	
});

server.listen(3000,()=>{
	console.log('Server started at 3000');
});
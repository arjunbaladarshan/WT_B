const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{


	res.setHeader('Content-Type','text/html');
	if(req.url=="/favicon.ico"){
		res.end(' ');
	}
	else if(req.url=="/home"){
		res.statusCode = 200;
		res.write('Welcome home');
		res.write('This is a new line of code');
		res.write("<br/>")
		res.write("This is last line");
		res.end();
	}
	else if(req.url=="/about"){
		res.statusCode = 200;
		fs.readFile('about.html',(err,data)=>{
			res.end(data);
		})
	}
	else if(req.url=="/contact"){
		res.statusCode = 200;
		res.end('My Mobile = <h2>234234234123</h2>');
	}
	else{
		res.statusCode = 404;
		console.log(req.url);
		res.end('Hello world - rajkot, Guajrat, INDIA, Earth');	
	}

	
});

server.listen(3000,()=>{
	console.log('server started at 3000')
});
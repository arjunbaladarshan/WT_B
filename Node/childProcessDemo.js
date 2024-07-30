const child_process = require('child_process');

child_process.exec('java Demo',(err,stdout,stdin)=>{
	console.log(stdout);
});
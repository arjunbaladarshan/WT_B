const fs = require('fs');

// fs.exists('pathDemo.js',(ans)=>{
// 	console.log(ans);
// });

// fs.stat('pathDemo.js',(err, ans)=>{
// 	console.log("Ans = ",ans);
// });

// fs.readFile('first.js',(err,data)=>{
// 	console.log(data.toString());
// });

// fs.writeFile('second.txt',"arjun bala",(err)=>{
// 	console.log('File Written success')
// });

// fs.appendFile('second.txt'," darshan college",(err)=>{
// 	console.log('File Written success')
// });

// fs.readFile('first.txt',(err,data)=>{
// 	fs.writeFile('second.txt',data,(err)=>{})
// })

data = fs.readFileSync('first.txt')

console.log(data);

console.log("Bye Bye");
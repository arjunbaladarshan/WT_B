const url = require('url');

const path = "https://arjunbala.com/index.abc?name=a&age=12&rollNo=101";

const q = url.parse(path,true);

console.log(q.query.rollNo);
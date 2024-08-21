const express = require('express');
const app = express();

app.use('/koinenokav',express.static('pdf'));

app.listen(3000,()=>{
    console.log('Server started @ 3000');
})
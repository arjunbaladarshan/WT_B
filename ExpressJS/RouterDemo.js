const express = require('express');
const app = express();
const stuRoutes = require('./StudentRoutes');
const facRoutes = require('./FacultyRoutes');

app.use('/faculty',facRoutes);
app.use('/student',stuRoutes);

app.listen(3000,()=>{
    console.log('Server started @ 3000');
})
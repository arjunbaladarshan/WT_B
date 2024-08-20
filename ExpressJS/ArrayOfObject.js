const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded());

const students = [
    {
        id:1167,
        name:'samarth',
        email:'samarth@darshan.ac.in',
        age:12
    },
    {
        id:1243,
        name:'dhrumil',
        email:'dhrumilh@abcd.ac.in',
        age:21
    },
]

//getAllX
app.get('/students',(req,res)=>{
    res.send(students);
});

//getXByID
app.get('/students/:id',(req,res)=>{
    const ans = students.find((stu)=>{
        if(stu.id==req.params.id){
            return true;
        }
    });
    res.send(ans);
});

//Create
app.post('/students',(req,res)=>{
    students.push(req.body);
    res.send("Student Added");
});

//Update
app.patch('/students/:id',(req,res)=>{
    const indexToEdit = students.findIndex((stu)=>{
        if(stu.id==req.params.id){
            return true;
        }
    });
    students[indexToEdit] = req.body;
    res.send("Student Edited");
})

//delete
app.delete('/students/:id',(req,res)=>{
    const indexToDelete = students.findIndex((stu)=>{
        if(stu.id==req.params.id){
            return true;
        }
    });

    students.splice(indexToDelete,1);
    res.send('Student Deleted');
});

app.get('/students/search/:text',(req,res)=>{
    const ans = students.filter(stu=>{
        if(stu.name.indexOf(req.params.text)>-1){
            return true;
        }
    });
    res.send(ans);
})


app.listen(3000,()=>{
    console.log("server started @ 3000");
})
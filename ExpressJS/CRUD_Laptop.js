const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const laptops = [
    {
      "createdAt": "2024-08-05T18:10:27.492Z",
      "name": "Daisy Botsford",
      "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/109.jpg",
      "price": "353.00",
      "id": "1"
    },
    {
      "createdAt": "2024-08-05T13:31:29.762Z",
      "name": "Viola McKenzie Jr.",
      "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/266.jpg",
      "price": "532.00",
      "id": "2"
    },
    {
      "createdAt": "2024-08-06T06:16:15.663Z",
      "name": "Jeffery Koelpin",
      "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/423.jpg",
      "price": "345.00",
      "id": "3"
    },
    {
      "createdAt": "2024-08-05T23:23:42.314Z",
      "name": "Hubert Ruecker",
      "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/973.jpg",
      "price": "840.00",
      "id": "4"
    },
    {
      "createdAt": "2024-08-05T22:27:31.374Z",
      "name": "Miss Paula Conroy",
      "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1045.jpg",
      "price": "695.00",
      "id": "5"
    }
  ]

//getAllX
app.get('/laptops',(req,res)=>{
    res.send(laptops);
});

//getXByID
app.get('/laptops/:id',(req,res)=>{
    const ans = laptops.find((stu)=>{
        if(stu.id==req.params.id){
            return true;
        }
    });
    res.send(ans);
});

//Create
app.post('/laptops',(req,res)=>{
    laptops.push(req.body);
    res.send("Laptop Added");
});

//Update
app.patch('/laptops/:id',(req,res)=>{
    const indexToEdit = laptops.findIndex((stu)=>{
        if(stu.id==req.params.id){
            return true;
        }
    });
    laptops[indexToEdit] = req.body;
    res.send("Laptop Edited");
})

//delete
app.delete('/laptops/:id',(req,res)=>{
    const indexToDelete = laptops.findIndex((stu)=>{
        if(stu.id==req.params.id){
            return true;
        }
    });

    laptops.splice(indexToDelete,1);
    res.send('Laptop Deleted');
});

app.get('/laptops/filter/:from-:to',(req,res)=>{
    const ans = laptops.filter(lap=>{
        if(lap.price>req.params.from && lap.price<req.params.to){
            return true;
        }
    });
    res.send(ans);
});


app.listen(3000,()=>{
    console.log("server started @ 3000");
})
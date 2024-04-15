const express = require("express");
const app = express();
let port = 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/register", (req, res)=>{
    let {user, pass} = req.query;
    res.send(`GET request for ${user}`);
});

app.post("/register", (req, res)=>{
    let {user, pass} = req.body;
    res.send(`POST request for ${user}`);
});



app.listen(port, ()=>{
    console.log(`Sever Listening port ${port}`);
});

const express = require("express");
const app = express();
// console.log(app);
let port = 3000;
app.listen(port, ()=>{
    console.log(`this is our server poer ${port}`);
});

app.get("/", (req, res)=>{
    res.send("this is home page")
});

app.get("/:username/:id", (req, res)=>{
    let{username, id} = req.params;
    res.send(`welcome to @${username}`);
});
app.get("/search", (req, res)=>{
    let {q} = req.query;
    res.send(`welcome to @${q}!`);
});

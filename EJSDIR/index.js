const express = require("express");
const app = express();
const path = require("path");

let port = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/view"));

app.get("/hello", (req, res)=>{
    res.send("hello");
});

app.listen(port, ()=>{
    console.log("this is our port");
});

app.get("/", (req, res)=>{
    res.render("home.ejs");
});

app.get("/ig/:username", (req, res)=>{
    let followers = ["aashu", "soniya", "aman", "supriya"];
    let {username} = req.params;
    
    res.render("instagram.ejs", {username, followers});
});

app.get("/rolldic", (req, res)=>{
    let diceVal = Math.floor(Math.random() * 6) +1;
        res.render("rolldic.ejs", { num : diceVal});
    });
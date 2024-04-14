const express = require("express");
const app = express();
const path = require("path");

let port = 3000;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "/public/css")));
app.use(express.static(path.join(__dirname, "/public/js")));
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
    let instaData = require("./data.json");
    // let followers = ["aashu", "soniya", "aman", "supriya"];
    let {username} = req.params;
    let data = instaData[username];
    if(data){
        res.render("instagram.ejs", {username, data});
    } else{
        res.render("error.ejs", {username});
    }
    
});

app.get("/rolldic", (req, res)=>{
    let diceVal = Math.floor(Math.random() * 6) +1;
        res.render("rolldic.ejs", { num : diceVal});
    });
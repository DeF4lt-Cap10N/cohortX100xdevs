const express = require("express");
const app = express();
const fs = require("fs");

app.use(express.json());

app.get("/", (req, res)=>{
    // res.send("hello world")
    const value =fs.readFileSync("a.txt", "utf-8");
    res.send(value);
})

app.post("/user", (req, res)=>{
    const name = req.body.username;
    const password = req.body.password;
    res.send(`hello ${name} and ${password}`);
})

app.get("/goo", (req, res)=>{
    res.send("this is goo route");
})




app.listen(3000, ()=>{
    console.log("app listen in port 3000");
});
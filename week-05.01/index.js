const express = require("express");
const app = express();



app.get("/add", (req, res)=>{
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const value = a+b;
    res.status(200).send(value)
});

app.get("/sub", (req, res)=>{
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const value = a-b;
    res.status(200).send(value)
});

app.get("/mul", (req, res)=>{
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const value = a*b;
    res.status(200).send(value)
});

app.get("/div", (req, res)=>{
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const value = a/b;
    if(b==0){
        res.status(406).send("Invalid value of b");
        return;
    }
    res.status(200).send(value)
});

app.listen(4000);
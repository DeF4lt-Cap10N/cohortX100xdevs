const express = require("express");
const app = express();

const mongoose = require('mongoose');

const dotenv = require("dotenv");
dotenv.config();

const {userModle, todoModel} = require("./db");


const PORT = process.env.PORT || 4001;

app.get("/", (req, res)=>{
    res.send("Hello boy");
})


app.post("/signUp", (req, res)=>{

})

app.post("/signIn", (req, res)=>{

})



mongoose.connect(process.env.DATABASE_CONNECTION)
.then(()=>console.log("DB connected!!"))
.catch((err)=>console.log(`error in db connection: ${err}`));


app.listen(PORT, ()=>{
    console.log(`port listen  on ${PORT}`)
})
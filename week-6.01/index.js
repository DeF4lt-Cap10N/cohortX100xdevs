const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");

const JWT_SECRET = "secretnameisaksh123kas";

// const { v4: uuidv4 } = require('uuid');

app.use(express.json());
const middleware = require("./middelware")


const users = require("./userData")

app.get("/", (req, res)=>{
    res.send("All good bro!!");
})

app.post("/signUp", (req, res)=>{
    const {userName,userPass} = req.body;

    if(!userName || !userPass){
        return res.status(400).send("Username require!!");
    }

    const oldUser = users.find((e)=>e.userName===userName && e.userPass===userPass);
    if(oldUser){
        return res.status(400).send("change the userName");
    }

    users.push({userName, userPass});

    res.status(201).json({
        message:"signUp successfully",
        user:{
            userName,
            userPass
        }
    });

    console.log(users);

})


app.post("/signIn", (req, res)=>{
    const {userName,userPass} = req.body;

    if(!userName && !userPass){
        return res.status(400).send("Username require!!");
    }

    const foundUser = users.find((e)=>e.userName===userName && e.userPass===userPass);
    if(!foundUser)return res.status(400).send("Invalid user");


    const token = jwt.sign({userName:foundUser.userName}, JWT_SECRET);

    // const token = uuidv4();
    foundUser.token=token;
    res.status(200).json({
        message:"signin successfully",
        user:{
            userName:foundUser.userName,
            userPass:foundUser.userPass,
            token
        },
    });

})

app.get("/profile", middleware, (req, res)=>{
    res.status(200).send(`welcome to my world ${req.user.userName}`)
})


app.listen(3005, ()=>{
    console.log(`port is listening in 3005`);
})

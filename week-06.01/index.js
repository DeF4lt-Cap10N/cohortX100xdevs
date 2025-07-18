const express = require("express");
const app = express();
app.use(express.json());

const mongoose = require('mongoose');

const dotenv = require("dotenv");
dotenv.config();

const jwt = require("jsonwebtoken");

const bcrypt = require("bcrypt")

const { UserModel, TodoModel } = require("./db");


const PORT = process.env.PORT || 4001;

app.get("/", (req, res) => {
    res.send("Hello boy");
})


app.post("/signUp", async (req, res) => {
    const { email, password, name } = req.body;


    const hashPass = await bcrypt.hash(password, 5);

    await UserModel.create({
        email: email,
        password: hashPass,
        name: name,
    })

    res.json({
        message: "You are logged in"
    })
});

app.post("/signIn", async (req, res) => {
    const { email, password } = req.body;

    const user = await UserModel.findOne({
        email: email,
    })
    console.log(user);

    const matchPass = bcrypt.compare(password, user.password);

    if (matchPass) {
        const token = jwt.sign({
            id: user._id.toString()
        }, process.env.JWT_SECRET);

        res.json({
            token: token,
            message: "login succesfully"
        })
    }
    else {
        res.status(403).json({
            message: "Incorrect creditial!"
        })
    }

})

app.post("/todo", auth, async (req, res) => {
    const userId = req.userId;
    const { title, done } = req.body;

    await TodoModel.create({
        title: title,
        done: done,
        userId: userId
    })

    res.json({
        message: "Todo is created!"
    })
})

app.post("/todos", auth, async (req, res) => {
    const userId = req.userId;
    const todos = await TodoModel.findOne({
        userId: userId
    })

    if (todos) {
        res.json({
            todos
        })
    }
    else {
        res.json("todos are empty!!")
    }
})


function auth(req, res, next) {
    const token = req.headers.token;

    const decodeData = jwt.verify(token, process.env.JWT_SECRET);

    if (decodeData) {
        req.userId = decodeData.id;
        next();
    }
    else {
        res.status(403).json({
            message: "Incorrect credentials"
        })
    }
}



mongoose.connect(process.env.DATABASE_CONNECTION)
    .then(() => console.log("DB connected!!"))
    .catch((err) => console.log(`error in db connection: ${err}`));


app.listen(PORT, () => {
    console.log(`port listen  on ${PORT}`)
})
const mongoose = require("mongoose");
const objectId = mongoose.Schema;

const User = new Schema({
    email:{type:String, unique:true},
    passWord:String,
    name:String
})


const Todo = new Schema({
    title:String,
    done:Boolean,
    userId:objectId
})

const userModle = mongoose.model("users", User);
const todoModel = mongoose.model("todos", Todo);


module.exports = {
    userModle:userModle,
    todoModel:todoModel
};
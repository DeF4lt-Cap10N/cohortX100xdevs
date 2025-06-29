
const jwt = require("jsonwebtoken");
const JWT_SECRET = "fuckmiddelware";

const users = require("./userData")

function middleware(req, res, next){
    const token = req.headers.tokenn;
    if(!token){
        return res.status(400).send("token required!!!");
    }

    const userdata = jwt.verify(token, JWT_SECRET);

    const userName = userdata.userName;

    const findUser = users.find((e)=>e.userName===userName);

    if(!findUser){
        return res.status(400).send("Invalid token!!");
    }
    req.user=findUser;
    next();

}

module.exports=middleware
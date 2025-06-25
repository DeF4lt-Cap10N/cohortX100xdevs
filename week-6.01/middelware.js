
const users = require("./userData")

function middleware(req, res, next){
    const token = req.headers.tokenn;
    if(!token){
        return res.status(400).send("token required!!!");
    }

    const findUser = users.find((e)=>e.token===token);

    if(!findUser){
        return res.status(400).send("Invalid token!!");
    }
    req.user=findUser;
    next();

}

module.exports=middleware
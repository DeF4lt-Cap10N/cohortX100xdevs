
const jwt = require("jsonwebtoken");
const JWT_SECRET = "secretnameisaksh123kas";

const users = require("./userData")

function middleware(req, res, next) {
    const token = req.headers.token;
    if (!token) {
        return res.status(401).send("token required!!!");
    }

    try {
        const userdata = jwt.verify(token, JWT_SECRET);
        const userName = userdata.userName;

        const findUser = users.find((e) => e.userName === userName);

        if (!findUser) {
            return res.status(401).send("Invalid token!!");
        }
        req.user = findUser;

        next();
    }
    catch (err) {
        return res.status(401).send("token is invalid")
    }


}

module.exports = middleware
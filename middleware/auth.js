const jwt = require("jsonwebtoken");
require("dotenv").config();


//because it is a middleware function it has next
//we use next to just say it to move to the other piece of middleware
module.exports = function (req, res, next) {
  const token = req.header("x-auth-token");

  //check if no token and the route IS PROTECTED deny authorization
  if (!token) {
    //Error 401 is not authorized error
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  //Verify token
  try {
    const decoded = jwt.verify(token,process.env.jwtSecret);
    // console.log(decoded);
    //decoded is just the payload we already sent
    req.user = decoded.user;
    // console.log(req.user);
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};
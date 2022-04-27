const express = require("express");
const app = express();
const connectDB = require("../config/db");
require("dotenv").config();

//Connect MongoDB
connectDB();

//use parser middleware
//body-parser => deprecate / built in express, to run it we should do this:
//if you need to parse body (req.body) you should add this line to your code
app.use(express.json({ extended: false }));

//Test route
app.get("/", (req, res) => {
  res.send("Hello world!");
});

//Define routes
app.use("/api/users", require("../routes/api/users"));
app.use("/api/auth", require("../routes/api/auth"));
app.use("/api/profile", require("../routes/api/profile"));
app.use("/api/cards", require("../routes/api/cards"));

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.info(`Server is running on port ${port}`);
});
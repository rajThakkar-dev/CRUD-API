const express = require("express");
const fs = require("fs");
const { connectDb } = require("./connection")
const {logReqRes} = require("./middlewares/log")
const userRouter = require("./routes/user");


const app = express();
const PORT = 8000;

// Connection 

connectDb("mongodb://127.0.0.1:27017/practice-app").then(()=> console.log("MongoDB Connected"))


// middlewares
app.use(express.urlencoded({ extended: false}))

app.use(logReqRes("log.txt"));

app.use("/api/users", userRouter);


app.listen(PORT, ()=> console.log(`Server Started at PORT : ${PORT}`));
const express = require("express");

const app = express();
const {adminAuth, userAuth} =require("./middlewares/auth");


app.use("/admin",adminAuth);
// app.use("/user",userAuth);
app.get("/admin/getAllData", (req,res)=>{
    //logic to get all data
    res.send("Get all User data");
})

app.post("/user/login",(req,res)=>{
    res.send("user login Successfully");
})

app.get("/user/data",userAuth,(req,res)=>{
    res.send("User Data Sent");
})

app.get("/admin/deleteUser", (req,res)=>{
    //logic to delete user
    res.send("Deleted User");
})

app.listen(7777, ()=>{
    console.log("Server is successfully listening on port 7777...");
});
const express = require("express");
const connectDB=require("./config/database");
const User = require("./models/user");

const app = express();


app.post("/signup" ,async (req,res)=>{

    const user =  new User({
        firstName:"sachin",
        lastName:"tendulkar",
        emailId:"sachin@kohli.com",
        password:"sachin@123",
        _id : "234791273408979878567891",
    });

    try{
        await user.save();
        res.send("User added successfully");
    }catch(err){
        res.status(400).send("Error saving the user "+ err.message);
    }

  
})



connectDB()
.then(
    ()=>{
        console.log("Database Connection Established...");
        app.listen(7777, ()=>{
            console.log("Server is successfully listening on port 7777...");
        });
    }
)
.catch((err)=>{
    console.error("Database cannot be connected");
});



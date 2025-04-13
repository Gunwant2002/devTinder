const express = require("express");

const app = express();


app.use("/",(err,req,res,next)=>{
    res.status(500).send("Something went wrong");
})


app.get("/getUserData",(req,res)=>{

    // try{
        throw new Error("adkjflah");
        res.send("User Data Sent");
    // }
    // catch(err){
    //     res.status(500).send("some error, contact support team");
    // }
   
})

app.use("/",(err,req,res,next)=>{
    res.status(500).send("Something went wrong");
})




app.listen(7777, ()=>{
    console.log("Server is successfully listening on port 7777...");
});
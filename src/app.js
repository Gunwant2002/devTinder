const express = require("express");

const app = express();


app.get("/user/:userId/:name/:password",(req,res)=>{
    console.log(req.params);
    res.send({firstname:"Gunwant",lastName:"Banait"});
})




app.listen(7777, ()=>{
    console.log("Server is successfully listening on port 7777...");
});
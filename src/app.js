const express = require("express");

const app = express();



app.get("/user",(req,res)=>{
    res.send({firstname:"Gunwant",LastName:"Banait"});
})

app.post("/user",(req,res)=>{
    console.log();
    res.send("data successfully saved to database");
})


app.delete("/user",(req,res)=>{
    res.send("deleted Successfully!");
})

app.use("/test",(req,res)=>{
    res.send("Hello from the server");
})






app.listen(7777, ()=>{
    console.log("Server is successfully listening on port 7777...");
});
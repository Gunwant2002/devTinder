const express = require("express");

const app = express();


app.get(
    "/user",

   (req,res,next)=>{
    console.log("Handling route handlers for user 1 ");
    next();
    // res.send("Response");
},

(req,res,next)=>{
    console.log("handling the routes for user 2");
    // res.send("2nd Response");
    next();
},
   
(req,res,next)=>{
    console.log("handling the routes for user 3");
    // res.send("3rd Response");
    next();
},

(req,res,next)=>{
    console.log("handling the routes for user 4");
    // res.send("4th Response");
    next();
},
   
(req,res,next)=>{
    console.log("handling the routes for user 5");
    res.send("5th Response");
    
}

);




app.listen(7777, ()=>{
    console.log("Server is successfully listening on port 7777...");
});
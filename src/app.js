const express = require("express");
const connectDB=require("./config/database");
const User = require("./models/user");

const app = express();

app.use(express.json());

app.get("/feed",async(req,res)=>{
    try{
        const users= await User.find({});
        res.send(users);
    }catch(err){
        res.status(400).send("Something went wrong");
    }
    
});
app.get("/user",async (req,res)=>{

    const userEmail = req.body.emailId;

    try{
        const user = await User.findOne({emailId:userEmail});
        if(!user){
            res.status(404).send("user not found");
        }else{
            res.send(user);
        }
        
       
    }catch(err){
        res.status(400).send("something went wrong");
    }
    // const userEmail= req.body.emailId;
    // try{
    //     const users = await User.find({emailId:userEmail});

    //     if(users.length===0)
    //     {
    //         res.status(404).send("user not found")
    //     }else{
    //         res.send(users);
    //     }
        
    // }catch(err){
    //     res.status(400).send("Something went wrong");
    // }
   
});
app.post("/signup" ,async (req,res)=>{

    const user =  new User(req.body);

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



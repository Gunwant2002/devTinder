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

app.delete("/user",async (req,res)=>{
    const userId = req.body.userId;
    try{
       const user =  await User.findByIdAndDelete(userId);
       res.send("user deleted successfully");
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

app.patch("/user/:userId",async(req,res)=>{
    const userId=req.params.userId;
    const data = req.body;

    
    try{
        const ALLOWED_UPDATE =["photoUrl","age","about","gender","skills",];

    const isUpdateAllowed = Object.keys(data).every((k)=>
        ALLOWED_UPDATE.includes(k)
    );

    if(!isUpdateAllowed){
        throw new Error("Update not allowed");
    }

    if(data?.skills.length>10)
    {
        throw new ERROR("skills can not be more than 10");
    }
        const user = await User.findByIdAndUpdate({_id:userId},data,
            {
                returnDocument:"after",
                runValidators:true,
            });
        console.log(user);
        res.send("user updated successfully");

    }catch(err){
        res.status(400).send("UPDATE FAILED: " + err.message);
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



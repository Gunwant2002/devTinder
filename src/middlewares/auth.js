const adminAuth=(req,res,next)=>{
    console.log("checking for admin authentication");

    const token="xyz";
    const isAuthorized= token==="xyz";

    if(!isAuthorized){
        res.status(401).send("Unauthorized User");
    }else{
        next();
    }
}

const userAuth=(req,res,next)=>{
    console.log("checking for user authentication");

    const token="xyz";
    const isAuthorized= token==="xyz";

    if(!isAuthorized){
        res.status(401).send("Unauthorized User");
    }else{
        next();
    }
}

module.exports={
    adminAuth,
    userAuth,
};
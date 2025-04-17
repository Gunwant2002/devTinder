const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        minlength:3,
        maxlength:50,
    },
    lastName:{
        type:String
    },
    emailId:{
        type:String,
        lowercase:true,
        trim:true,
        required:true,
        unique:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new error("Invalid email Id" + value);
            }
        },
    },
    password:{
        type:String,
        required:true,
        validate(value){
            if(!validator.isStrongPassword(value)){
                throw new Error("Not a Strong Password" + value);
            }
        }
    },
    age:{
        type:Number,
        min:18,
    },
    gender:{
        type:String,
        validate(value){
            if(!["male","female","others"].includes(value)){
                throw new Error("Gender data is not valid");
            }
        },
    },
    photoUrl:{
        type:String,
        default:"https://i.pinimg.com/280x280_RS/e1/08/21/e10821c74b533d465ba888ea66daa30f.jpg",
        validate(value){
            if(! validator.isURL(value)){
                throw new Error("invalid user Photo URL" + value);
            }
        },
    },
    about:{
        type:String,
        default:"This is a default about of a user",
    },
    skills:{
        type:[String],
    },

},{
    timestamps:true,
})


module.exports = mongoose.model("User",userSchema);
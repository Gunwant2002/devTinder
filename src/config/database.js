const mongoose = require("mongoose");

const connectDB = async()=>{
    await mongoose.connect("mongodb+srv://Gunwant:GxnHeZtxpj4FFXUR@namastenode.pjs3p5g.mongodb.net/devTinder");
};

module.exports = connectDB ;

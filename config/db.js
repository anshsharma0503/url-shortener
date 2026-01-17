const mongoose = require("mongoose");

const connectDb = async() => {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected");
    } catch (error){
        console.error("mongoDB connection filed:" , error.message);
        process.exit(1);
    }
};

module.exports = connectDb;
//db.js

import mongoose from "mongoose"

export const connectDB = async () =>{
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("MongoDB connected successfuly");
    } catch (error) {
        console.error("Error connecting to MongoDB", error);
    }
}
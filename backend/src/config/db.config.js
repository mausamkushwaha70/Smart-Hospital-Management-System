import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

export const DbConnect = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("DB_Connected");
    } catch (error) {
        console.log(error)
    }
}
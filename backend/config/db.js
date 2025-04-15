import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://mahesh1503:Mahesh1410@cluster0.mbhlx.mongodb.net/FOODAPP').then(()=>console.log("DB Connected"));
}
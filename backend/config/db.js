import mongoose from "mongoose";

export const connectDB = async () =>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`Mongo DB connectes ${conn.connection.name}`)
    }catch{
        console.log('connection errror');
        process.exit(1)
    }
}
import mongoose from "mongoose";

export const connect = async()=>{
    try {
        const conn = await mongoose.connect(process.env.Db_URL , {dbName:"endy"}  )

        console.log(`MongoDB connected: ${conn.connection.host}`);
        
    } catch (error) {
        console.log(`Error connecting to MongoDB: ${error.message}`);
        
        process.exit(1)
        
    }
}



import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected! DB HOST: ${connectionInstance.connection.host}`)            // read about this in console. kis host pe connect hua hai ye check karne k liye kyuki database development, production aur testing ka alag alag hota hai...
    } catch (error) {
        console.log("MONGODB connection failed: ", error) 
        process.exit(1)        // read about this
    }
}

export default connectDB
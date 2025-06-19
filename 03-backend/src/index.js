// require('dotenv').config({path: './env'})       // code consistancy khrab n ho esliye require stament use nhi karenge
import dotenv from "dotenv"                      // dotenv k liye kuch configuration karni padegi jo niche hai aur package.json m hai


import mongoose from "mongoose"
import express from "express"
import { DB_NAME } from "./constants.js"; 
import connectDB from "./db/index.js";

const app = express();
dotenv.config({
    path: './env'
})

// Second approach for mongodb connection
connectDB()

// First approach to mongodb connection 
/*
(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on('error', (err) => {
            console.log("Error: ", err)
            throw err
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`)
        })
    } catch (error) {
        console.error("Error: ", error)
        throw error
    }
})()

*/
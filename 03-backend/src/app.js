import express from "express"
import cors from "cors"
import cookieParse from "cookie-parser"

const app = express()

// cors k bare m pdho
app.use(cors({
    origin: process.env.CORS_ORIGIN, 
    credentials: true
}))

// data alag alag tarike se aa sakta hai jaise url form json etc to eske liye v configuration karni padti hai taki bahut sara data n aa jaye.
app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))     // kai baar kuch file aati hai to usko apne hi server m store rakhna chahta hu to uske liye ek public naam se folder bna dete 
app.use(cookieParse())

export { app }
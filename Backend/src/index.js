

import express from "express";
import dotenv from "dotenv";
import { database_connection } from "./config/db.js";
import profileAuth from "./Routes/routes.js"
import cors from "cors"

dotenv.config();
const app = express();
app.use(express.json())
 

const PORT = process.env.PORT || 4000;
app.use(express.json())
app.use(cors({
    origin: "https://jediolio.vercel.app/",
    credentials: true
}))
app.use("/api", profileAuth)





const server = async () => {
    try {
        await database_connection()
        app.listen(PORT, () => {
            console.log(`server on the running PORT ${PORT}`)
        })

    } catch (error) {
        console.log("something went wrong ! from index.js" + error.message)
    }
}

server()
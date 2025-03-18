import mongoose from "mongoose";

import dotenv from "dotenv"

dotenv.config()

export const database_connection = async () => {

    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("database connected !")

    } catch {
        console.log("Error while connecting database !")
    }



}
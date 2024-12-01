import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

async function connectWithDatabase() {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log("Successfully connected with the database");
    } catch(error) {
        console.log(error);
    }
}

export default connectWithDatabase;
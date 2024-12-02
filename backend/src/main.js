import express from "express";
import "dotenv/config";
import connectWithDatabase from "./db/connection.js";
import userRouter from "./routes/user.route.js";

await connectWithDatabase();

const app = express();

app.use("/api/v1/user", userRouter);

app.listen(process.env.PORT, () => {
    console.log("Backend server has started");
});
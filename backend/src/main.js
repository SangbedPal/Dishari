import express from "express";
import "dotenv/config";

import fileUpload from "express-fileupload";
import { v2 as cloudinary } from 'cloudinary';

import connectWithDatabase from "./db/connection.js";
import userRouter from "./routes/userRouter.js";
import { CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_SECRET_KEY } from "./constants.js";

await connectWithDatabase();

const app = express();

app.use(
    fileUpload({
      useTempFiles: true,
      tempFileDir: "/tmp/",
    })
);

// Cloudinary (for file upload) configuration
cloudinary.config({ 
    cloud_name: CLOUD_NAME, 
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_SECRET_KEY
});

app.use("/api/v1/user", userRouter);

app.listen(process.env.PORT, () => {
    console.log("Backend server has started");
});
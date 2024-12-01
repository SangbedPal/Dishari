import express, { Router } from "express";
import cookieParser from "cookie-parser";
import registerUser from "../controllers/registerUser.js";
import verifyUser from "../controllers/verifyUser.js";
import logoutUser from "../controllers/logoutUser.js";
import createProfile from "../controllers/createProfile.js"

const userRouter = Router();

userRouter.use(express.json());
userRouter.use(cookieParser());

userRouter.post("/register", registerUser);
userRouter.post("/verify", verifyUser);
userRouter.post("/logout", logoutUser);
userRouter.post("/create-profile", createProfile);

export default userRouter;
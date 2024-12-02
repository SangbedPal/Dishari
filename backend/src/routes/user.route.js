import express, { Router } from "express";
import cookieParser from "cookie-parser";
import registerUser from "../controllers/register_user.controller.js";
import verifyUser from "../controllers/verify_user.controller.js";
import signoutUser from "../controllers/signout_user.controller.js";
import createProfile from "../controllers/create_profile.controller.js"

const userRouter = Router();

userRouter.use(express.json());
userRouter.use(cookieParser());

userRouter.post("/register", registerUser);
userRouter.post("/verify", verifyUser);
userRouter.post("/signout", signoutUser);
userRouter.post("/create-profile", createProfile);

export default userRouter;
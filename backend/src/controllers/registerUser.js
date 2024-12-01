import userModel from "../models/userModel.js";
import sendCookie from "../utils/sendCookie.js";

async function registerUser(req, res) {
    const {email, password} = req.body;

    await userModel.create({
        email,
        password
    });

    sendCookie(res, email);

    res.status(201);
}

export default registerUser;
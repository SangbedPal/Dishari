import userModel from "../models/user.model.js";
import sendCookie from "../utils/send_cookie.js";

async function registerUser(req, res) {
    const { email, password } = req.body;

    try {
        await userModel.create({ email, password });
        sendCookie(res, email);

        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
}

export default registerUser;
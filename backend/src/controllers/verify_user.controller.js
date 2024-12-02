import userModel from "../models/user.model.js";
import sendCookie from "../utils/send_cookie.js";

async function verifyUser(req, res) {
    const {email, password} = req.body;

    const user = await userModel.findOne({
        email,
        password
    });

    if(user) {
        sendCookie(res, email);
        res.status(200);
    } else {
        res.status(401);
    }
}

export default verifyUser;
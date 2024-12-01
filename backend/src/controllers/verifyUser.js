import userModel from "../models/userModel.js";
import sendCookie from "../utils/sendCookie.js";

function alreadyLoggedIn(req) {
    const token = req.cookies.token;
    return token ? true : false;
}

async function verifyUser(req, res) {
    if(alreadyLoggedIn) {
        return res.status(200);
    }

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
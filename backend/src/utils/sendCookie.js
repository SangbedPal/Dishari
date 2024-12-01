import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../constants";

function sendCookie(res, email) {
    const token = jwt.sign({email}, SECRET_KEY);
    res.cookie("token", token);
}

export default sendCookie;
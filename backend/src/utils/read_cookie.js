import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../constants.js";

function readCookie(req) {
    const token = req.cookies.token;
    const email = jwt.verify(token, SECRET_KEY).email;

    return email;
}

export default readCookie;
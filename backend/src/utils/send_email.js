import nodemailer from "nodemailer";
import { GMAIL_ID, GMAIL_PASSWORD } from "../constants.js";

async function sendEmail(emailId, subject, body) {
    const transporter = nodemailer.createTransport({
        service: "gmail", 
        secure: true,
        port: 465,
        auth: {
            user: GMAIL_ID,
            pass: GMAIL_PASSWORD
        }
    });

    const mailOptions = {
        from: GMAIL_ID,
        to: emailId,
        subject: subject,
        text: body
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log("Email sent: " + info.response);
    } catch (error) {
        console.error("Error sending email: ", error);
    }
}

export default sendEmail;
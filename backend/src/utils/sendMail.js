import nodemailer from "nodemailer";
import { GMAIL_ID, GMAIL_PASSWORD } from "../constants";

async function sendMail(email, title, body) {
    // Create a transporter
    const transporter = nodemailer.createTransport({
        service: "gmail", // Use Gmail or any other supported service
        secure: true,
        port: 465,
        auth: {
            user: GMAIL_ID,
            pass: GMAIL_PASSWORD
        }
    });

    // Email options
    const mailOptions = {
        from: GMAIL_ID,
        to: email,
        subject: title,
        text: body
    };

    // Send the email
    try {
        const info = await transporter.sendMail(mailOptions);
        console.log("Email sent: " + info.response);
    } catch (error) {
        console.error("Error sending email: ", error);
    }
}

export default sendMail;
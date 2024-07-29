"use server";
import nodemailer from "nodemailer";

export async function notifyContactMessage(data: {
  name: string;
  email: string;
  message: string;
}) {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.SENDER_EMAIL_ADDRESS,
      pass: process.env.SENDER_EMAIL_PASSWORD,
    },
  });

  const info = await transporter.sendMail({
    from: process.env.SENDER_EMAIL_ADDRESS,
    to: process.env.RECEIVER_EMAIL_ADDRESS,
    subject: `TRABAJO - New contact message from ${data.name}`,
    text: `Name: ${data.name}\nEmail: ${data.email}\n\nMessage: ${data.message}`,
  });

  console.log("Message sent: %s", info.messageId);
}

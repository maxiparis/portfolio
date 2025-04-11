import { Request, Response } from "express";
import axios from "axios";

export async function sendEmailHandler(req: Request, res: Response) {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    res.status(400).json({ message: "Missing required fields" });
    return;
  }

  const service_id = process.env.EMAILJS_SERVICE_ID;
  const template_id = process.env.EMAILJS_TEMPLATE_ID;
  const public_key = process.env.EMAILJS_PUBLIC_KEY;

  if (!service_id || !template_id || !public_key) {
    console.error("Missing required environment variables for EmailJS.");
    res.status(500).json({ message: "Missing required environment variables" });
    return;
  }

  try {
    const data = {
      service_id,
      template_id,
      user_id: public_key,
      template_params: { name, message, email },
    };

    await axios.post("https://api.emailjs.com/api/v1.0/email/send", data);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error sending email" });
  }
}
// server/mailService.ts
import nodemailer from "nodemailer";
import type { ContactFormData } from "../../types"; // adjust path

export const sendMail = async (formData: ContactFormData): Promise<void> => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER, // Gmail address
      pass: process.env.GMAIL_PASS, // Gmail app password
    },
  });

  const mailOptions = {
    from: formData.email,
    to: process.env.GMAIL_USER, // receive messages at your Gmail
    subject: `New Contact Form Submission from ${formData.name}`,
    text: `
      Name: ${formData.name}
      Email: ${formData.email}
      Message: ${formData.message}
    `,
  };

  await transporter.sendMail(mailOptions);

  /**
   * Future Integration:
   * Swap Gmail with your domain email service (SMTP).
   * Example:
   * const transporter = nodemailer.createTransport({
   *   host: "mail.yourdomain.com",
   *   port: 465,
   *   secure: true,
   *   auth: {
   *     user: "contact@yourdomain.com",
   *     pass: process.env.DOMAIN_EMAIL_PASS,
   *   },
   * });
   */
};
import nodemailer from "nodemailer";

export default function handler(req, res) {
  const { name, email, subject, feedback } = req.body;

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_HOST_USER, // your email address
      pass: process.env.EMAIL_HOST_PASSWORD, // your email password
    },
    tls: {
      ciphers: "SSLv3",
    },
  });

  // send mail with defined transport object
  let info = transporter.sendMail({
    from: process.env.EMAIL_HOST_USER,
    to: process.env.EMAIL_HOST_SEND, // the recipient email address
    subject: `Feedback from ${name}: ${subject}`,
    html: `<p><b>Name:</b> ${name}</p><p><b>Email:</b> ${email}</p><p><b>Feedback:</b></p><p>${feedback}</p>`,
  });

  console.log("Message sent: %s", info.messageId);
  res.status(200).json({ message: "Feedback sent successfully!" });
}

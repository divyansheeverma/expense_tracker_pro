const nodemailer = require("nodemailer");

const emailManager = async (to, text, html, subject) => {
  var transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "59ea85a3d0e2f8",
      pass: "1cda517b2955c3",
    },
  });

  await transport.sendMail({
    to: to,
    from: "info@expensetracker.com",
    text: text,
    html: html,
    subject: subject,
  });
};

module.exports = emailManager;

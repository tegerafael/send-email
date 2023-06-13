const nodemailer = require("nodemailer");
const sgMail = require("@sendgrid/mail");

const sendEmailEthereal = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "diana.anderson@ethereal.email",
      pass: "sqVsWcAXZcCtDVftN5",
    },
  });

  let info = await transporter.sendMail({
    from: '"Coding Addict" <codingaddict@gmail.com>',
    to: "bar@exemplo.com",
    subject: "Hello",
    html: "<h2>Sending Emails with node.js</h2>",
  });

  res.json(info);
};

const sendEmail = async (req, res) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: "brunosantanabr14@gmail.com@gmail.com", // Change to your recipient
    from: "tiagorafael777@gmail.com", // Change to your verified sender
    subject: "Oi",
    text: "Oi",
    html: "<strong>Enviando email com node.js</strong>",
  };
  const info = await sgMail.send(msg);
  res.json(info);
};

module.exports = sendEmail;

require('dotenv').config()
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: process.env.HOST,
  port: 587,
  secure: false,
  auth: {
    user: process.env.USER,
    pass: process.env.PASS,
  },
});

const send_mail = async (tomail) => {
    if (!tomail) {
        return new Error("sender mail is required")
    }
    try {
const info = await transporter.sendMail({
    from: '"I Am Javascript" <otpverify1979@gmail.com>',
    to: tomail,
    subject: "Hello ✔ Testing",
    text: `Hello world! I am Learning queue system and worker using rabbitmq`, // plain‑text body
    html: `<b>Hello world! Hello world! I am Learning queue system and worker using rabbitmq</b>`, // HTML body
  });
} catch (err) {

  console.log("Unable to send mail : ", err);

}
}

module.exports = {send_mail}
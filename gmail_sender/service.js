var nodemailer = require('nodemailer');
require('dotenv').config();

function sendEmail (recipientEmail,subject,message){
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.APP_PASSWORD
  }
});

var mailOptions = {
  from: process.env.EMAIL,
  to: recipientEmail,
  subject: subject,
  text: message
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
}
module.exports = { sendEmail }
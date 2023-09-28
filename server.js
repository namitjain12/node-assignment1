
const nodemailer = require('nodemailer');

const readline = require('readline'); 
const f = require('./service');

const rl = readline.createInterface({
        input: process.stdin,
       output: process.stdout
});  
function profile(){
    let recipientEmail = '';
    let subject = '';
    let message = '';
  
    rl.question('Recipient\'s Email: ', (email) => {
      recipientEmail = email;
  
      rl.question('Subject: ', (subj) => {
        subject = subj;
  
        rl.question('Message: ', (msg) => {
          message = msg;
        
          rl.close();
  
          
          f.sendEmail(recipientEmail, subject, message);
        });
      });
    });
  }
  profile();



// rl.question('Recipient\'s Email: ', (recipientEmail) => {  
//     rl.question('Subject: ', (subject) => {      
//         rl.question('Message: ', (message) => {        

//             const transporter = nodemailer.createTransport({

//                 service: 'gmail',
//                 auth: {
//                     user: process.env.EMAIL_USER, 
//                     pass: process.env.EMAIL_PASS 
        
//                      }
//                      });

//             const mailOptions = {
//                 from: process.env.EMAIL_USER,
//                 to: recipientEmail,
//                 subject: subject,
//                 text: message

//             };

//             transporter.sendMail(mailOptions, (error, info) => {
//                 if (error) {
//                     console.log('Error:', error);
//                 } else {
//                     console.log('Email sent:', info.response);
//                 } 

//                  rl.close();
//             });
//         });
//     });
// });

 

const nodemailer = require('nodemailer');

const readline = require('readline');

 

const rl = readline.createInterface({

    input: process.stdin,

    output: process.stdout

});

 

 

rl.question('Recipient\'s Email: ', (recipientEmail) => {

   

    rl.question('Subject: ', (subject) => {

       

        rl.question('Message: ', (message) => {

           

            const transporter = nodemailer.createTransport({

                service: 'gmail',

                auth: {

                    user: 'namitjain0620@gmail.com',

                    pass: 'fafq lont teao eieh'

                }

            });

 

            // Email data

            const mailOptions = {

                from: 'namitjain0620@gmail.com',

                to: recipientEmail,

                subject: subject,

                text: message

            };

 

            // Send the email

            transporter.sendMail(mailOptions, (error, info) => {

                if (error) {

                    console.log('Error:', error);

                } else {

                    console.log('Email sent:', info.response);

                }

 

                // Close the readline interface

                rl.close();

            });

        });

    });

});

 

// var nodemailer = require('nodemailer');

// const readline = require('readline');

// let rl = readline.createInterface(

//     process.stdin, process.stdout);

//     rl.question('What is mail id? ', (mailOptions.to) => {

//         console.log('Your message has sent: ' + mailOptions.to);

//     });

   

 

// var transporter = nodemailer.createTransport({

//   service: 'gmail',

//   auth: {

//     user: 'namitjain0620@gmail.com',

//     pass: 'fafq lont teao eieh'

//   }

// });

 

// var mailOptions = {

//   from: 'namitjain0620@gmail.com',

//   to: '2019ume1716@mnit.ac.in',

//   subject: 'This is testing email',

//   text: 'Hi, how are you doing!'

// };

 

// transporter.sendMail(mailOptions, function(error, info){

//   if (error) {

//     console.log(error);

//   } else {

//     console.log('Email sent: ' + info.response);

//   }

// });
/*
Sindhu
*/
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'sindhu139@gmail.com',
        pass: 'Chethan@143'
      }
    });

function sendEmail(recipient_email,otp){
    var mailOptions = {
      from: 'sindhu139@gmail.com',
      to: `${recipient_email}`,
      subject: 'Welcome to Stikbook',
      text: ``,
      html: `<h2>Dear Applicant,</h2><h4>Thanks for Resgistering with STIKbook.</h4>
      <p>Your one time verification code is: </p>`
      +JSON.parse(JSON.stringify(otp))+`<p> and is valid for 2 minutes. (Generated at </p>`+new Date()+`)
      <p>*******************************</p><br>
      <p>This is an auto generated mail. Do not reply to this mail.</p>`,
    };
    
transporter.sendMail(mailOptions, function(error, otp){
     return (error) ? error : otp;
    });
}
exports.sendEmail = sendEmail;
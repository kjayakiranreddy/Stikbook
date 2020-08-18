const debug = require('debug')('app:startup');
const helmet = require('helmet'); // Helmet helps you secure your Express apps by setting various HTTP headers. It's not a silver bullet, but it can help!
const config  = require('config'); 
const mongoose = require('mongoose');
const morgan  = require('morgan');//HTTP request logger middleware for node.js
const Joi     = require('joi'); // The most powerful schema description language and data validator for JavaScript.
const users = require('./routes/users');
const auth = require('./routes/auth');
const home    = require('./routes/home');
const express = require('express');
const app = express();


mongoose.connect('mongodb://localhost/stikbook')
    .then( ()=>{ console.log('Connected to MongoDB...') })
    .catch(err => console.error('Could not connected to MongoDB...') );

//random otp generator
var randomstring = require("randomstring");

const secretToken = randomstring.generate({
  length:6,
  charset: 'numeric'
});
//nodemailer
    var nodemailer = require('nodemailer');
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'sindhu139@gmail.com',
        pass: 'Chethan@143'
      }
    });
    
    var mailOptions = {
      from: 'sindhu139@gmail.com',
      to: 'jaykiranreddy@gmail.com,p.sindhura515@gmail.com',
      subject: 'Welcome to Stikbook',
      text: ``,
      html: `<h2>Dear Applicant,</h2><h4>Thanks for Resgistering with STIKbook.</h4>
      <p>Your one time verification code is: </p>`
      +JSON.parse(JSON.stringify(secretToken))+`<p> and is valid for 10 minutes. (Generated at </p>`+new Date()+`)
      <p>*******************************</p><br>
      <p>This is an auto generated mail. Do not reply to this mail.</p>`,
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error); 
      } else {
        console.log('Email sent: ' + info.response);
      }
    });

app.set('view engine','pug');
app.set('views','./views');

app.use(express.json()); 
app.use(express.urlencoded({extended : true}));
app.use(express.static('public'));
app.use(helmet());
app.use('/api/users',users);
app.use('/api/auth',auth);
app.use('/',home);

if(app.get('env') === 'development') { app.use(morgan('tiny'));};

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
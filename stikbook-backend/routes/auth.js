const _ = require('lodash');
const Joi = require('joi');
const bcrypt = require('bcrypt');
const {User} = require('../models/user');
const {Credentials} = require('../models/credentials');
const mongoose = require('mongoose');
const express = require('express');
const { Authentication } = require('../models/authentication');
const router = express.Router();

// OTP verification 
router.post('/otp_verification', async (req,res)=> {
    let otp = await Authentication.findOne( {otp : req.body.otp});
    if(otp){
         await Authentication.deleteOne({otp:otp.otp});
         return res.status(200).send(otp.email);  
        }
    return res.status(400).send('Authentication failed!!');
});

//Password_Creation
router.post('/password_userName', async (req, res) => {

    let user_credentials = new Credentials(_.pick(req.body, ['email','userName','password']));
    const salt = await bcrypt.genSalt(10);
    user_credentials.password = await bcrypt.hash(user_credentials.password, salt);

    user_credentials.save();
    let user =await  User.findOne( {email: user_credentials.email});
    
    const token = user.generateAuthToken();
    res.header('x-auth-token',token).send(_.pick(user_credentials,['email','userName']));

});

//forgot_password
router.post('/forgot_password', async (req, res) => {

const filter = { email:`${req.body.email}`};
let update = { password: `${req.body.password}` };

const salt = await bcrypt.genSalt(10);
update.password = await bcrypt.hash(update.password, salt);

let credentials = await Credentials.findOneAndUpdate(filter, update, {
  new: true
});

res.send(true);

});


//Login
router.post('/login', async (req, res) => {
     
    let user_credentials = await Credentials.findOne( {email: req.body.email});
    if(!user_credentials) return res.status(400).send('Invalid email or password');
    
    const validPassword = await bcrypt.compare(req.body.password, user_credentials.password);
    if(!validPassword) return res.status(400).send('Invalid email or password');
    let userObj = await User.findOne( {email: user_credentials.email});
    const token = userObj.generateAuthToken();
    res.send(token );

});
//Forgot Password otp authentication
router.post('/forgot_password_otp', async (req, res) => {
 
    let user = await Credentials.findOne( {email: req.body.email});
    if(!user) return res.status(400).send('User not found..!');
    let otp="";
    do { otp = generateOtp(6);} while (!Authentication.findOne(otp));
    sendEmail(user.email,otp);
    let authentication = new Authentication({email:user.email,otp:otp});

    authentication.save();
    res.send(_.pick(user, ['_id','first_name','last_name','email']));

});


module.exports = router;
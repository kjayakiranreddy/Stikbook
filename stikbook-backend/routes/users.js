const _ = require('lodash');
const { generateOtp } = require('../middleware/services/generateOTP');
const { sendEmail } = require('../middleware/services/sendEmail'); 
const bcrypt = require('bcrypt');
const {User} = require('../models/user');
const {Post} = require('../models/post');
const {Interests} = require('../models/interests');
const mongoose = require('mongoose');
const express = require('express');
const { Authentication } = require('../models/authentication');
const router = express.Router();

router.post('/signup', async (req, res) => {
 
    let user = await User.findOne( {email: req.body.email});
    if(user) return res.status(400).send('User already registerd....');
    
    user = new User(_.pick(req.body, ['first_name','last_name','email','phone','gender','dob']));

    await user.save();
    
    let otp="";
    do { otp = generateOtp(6);} while (!Authentication.findOne(otp));

    sendEmail(user.email,otp);
    let authentication = new Authentication({email:user.email,otp:otp});

    authentication.save();

    res.send(_.pick(user, ['_id','first_name','last_name','email']));

});
router.post('/interests',async (req,res)=>{
    let user = await User.findOne( {email: req.body.email});
    if(!user) return res.status(400).send('User not found....');
    
    let interests = new Interests({interests:req.body.Interests,user_id:user._id});
    await interests.save();
    res.status(200).send();

})
router.get('/news_feed',async (req,res)=>{
    let user = await User.findOne( {email: req.body.email});
    if(!user) return res.status(400).send('User not found....');

    let posts = await Post.find({user_id:user._id});
    if(!posts) return res.status(400).send('Nothing to show from the'+req.body.email);
    res.send(posts);
});
router.get('/interests',async (req,res)=>{
    let user = await User.findOne( {email: req.body.email});
    if(!user) return res.status(400).send('User not found....');

    let interests = await Interests.find({user_id:user._id});
    if(!interests) return res.status(400).send('Nothing to show from the'+req.body.email);
    res.send(interests);
})

module.exports = router;
const Joi = require('joi');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    first_name : {
        type: String,
        required: true,
        minlength:5,
        maxlength:50
    },
    last_name : {
        type: String,
        required: true,
        minlength:5,
        maxlength:50
    },
    email : {
        type: String,
        required: true,
        minlength:5,
        maxlength:255,
        unique: true
    },
    phone:{
        type: String,
        required: true,
        minlength:8,
        maxlength:20
    },
    gender:{
        type: String,
        required: true,
        minlength:1,
        maxlength:1
    },
    dob:{
        type: Date,
        required:true
    }
});
userSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id:this._id},'stikBookPrivatekey');
    return token;
}
const User = mongoose.model('User', userSchema);


exports.User = User;
exports.validate = validateUser;


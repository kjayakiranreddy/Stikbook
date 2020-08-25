const mongoose = require('mongoose');

const Authentication = mongoose.model('Authentication', new mongoose.Schema({
        email : {
        type: String,
        required: true,
        minlength:5,
        maxlength:255
    },
    otp:{
        type: Number,
        required:true,
        unique: true
    },
    createdAt: { type: Date, expires: 120, default: Date.now }

}));


exports.Authentication = Authentication;

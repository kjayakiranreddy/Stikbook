const mongoose = require('mongoose');


const Credentials = mongoose.model('Credentials', new mongoose.Schema({
    email : {
        type: String,
        required: true,
        minlength:5,
        maxlength:255,
        unique: true
    },
    userName : {
        type: String,
        required: true,
        minlength:3,
        maxlength:16
    },
    password:{
        type: String,
        required:true,
        minlength:8,
        maxlength:1024,
        unique: true
    }
    
    

}));


exports.Credentials = Credentials;

const mongoose = require('mongoose');
const { optional } = require('joi');

const Post = mongoose.model('Post', new mongoose.Schema({
    description : {
        type: String,
        minlength:0,
        maxlength:5000
    },
    category :{
        type: String,
        required:true
    },
    video: 
    { 
        data: Buffer, 
        contentType: String
    },
    createdAt: { type: Date, default: Date.now }

}));


exports.Post = Post;
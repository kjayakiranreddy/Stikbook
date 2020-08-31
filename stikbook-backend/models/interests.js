const Joi = require('joi');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const interestSchema = new mongoose.Schema({
    interests : {
        type: Array,
        required: true
    },
    user_id:{
        type: String,
        required:true
    }
});

const Interests = mongoose.model('Interests', interestSchema);


exports.Interests = Interests;



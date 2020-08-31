const _ = require('lodash');
const path = require("path");
const Joi = require('joi');
const bcrypt = require('bcrypt');
const {User} = require('../models/user');
const {Post} =require('../models/post');
const {Credentials} = require('../models/credentials');
const { generateOtp } = require('../middleware/services/generateOTP');
const { sendEmail } = require('../middleware/services/sendEmail');
const mongoose = require('mongoose');
const express = require('express');
const { Authentication } = require('../models/authentication');
var multer = require('multer');
const router = express.Router();
const fs = require('fs');
const { promisify } = require('util')
const unlinkAsync = promisify(fs.unlink);
var stream = require('stream');



const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/');
  },
  filename: function (req, file, cb) {
    
    cb(null, file.originalname.replace(/ /g, '_'));
  }
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 50    // 50 MB
  }
});


/*router.post('/upload',function(req, res,next) {
  console.log(req.body);
  console.log(req.file);
  
});*/

router.post('/upload', upload.single('file'), (req, res, next) => {
  var obj = {  
    video: { 
        data: fs.readFileSync(path.join(__dirname + '/../public/uploads/' + req.file.filename)), 
        contentType: 'mp4'
    },
    description : req.body.desc,
    category : req.body.category,
    created_id: { type: Date, default: Date.now } 
} 
let post = new Post(obj);
post.save();
unlinkAsync(path.join(__dirname + '/../public/uploads/' + req.file.filename));
    res.status(200).json({
    message: 'Video upload successful'
  });
});

/* streaming video */
router.get('/video', async function(req, res) {
 let post = await Post.findById('5f4d3ba70ed72c574853bb41');
  const fileSize = post.video.data.length;
	const range = req.headers.range;
  if (range) {
		const parts = range.replace(/bytes=/, "").split("-")
		const start = parseInt(parts[0], 10)
		const end = parts[1] ? parseInt(parts[1], 10) : fileSize-1
		const chunksize = (end-start)+1
    //const file = fs.createReadStream(videoPath, {start, end})
    var buffer = new Buffer( post.video.data );
    var bufferStream = new stream.PassThrough({start, end});
    //console.log(file);
		const head = {
			'Content-Range': `bytes ${start}-${end}/${fileSize}`,
			'Accept-Ranges': 'bytes',
			'Content-Length': chunksize,
			'Content-Type': 'video/mp4',
		}
    res.writeHead(206, head)
    bufferStream.end( buffer );
    bufferStream.pipe(res);
		//file.pipe(res)
	} else {
		const head = {
			'Content-Length': fileSize,
			'Content-Type': 'video/mp4',
		}
		res.writeHead(200, head)
		fs.createReadStream(path).pipe(res)
	}
})

module.exports = router;
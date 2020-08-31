const debug = require('debug')('app:startup');
const helmet = require('helmet'); // Helmet helps you secure your Express apps by setting various HTTP headers. It's not a silver bullet, but it can help!
const config  = require('config'); 
const mongoose = require('mongoose');
const morgan  = require('morgan');//HTTP request logger middleware for node.js
const Joi     = require('joi'); // The most powerful schema description language and data validator for JavaScript.
const users = require('./routes/users');
const auth = require('./routes/auth');
const post = require('./routes/post');
const home    = require('./routes/home');
const express = require('express');
var bodyParser = require('body-parser');
const app = express();

mongoose.connect('mongodb://localhost/stikbook',{useFindAndModify : false})
    .then( ()=>{ console.log('Connected to MongoDB...') })
    .catch(err => console.error('Could not connected to MongoDB...') );


app.set('view engine','pug');
app.set('views','./views');
app.use(bodyParser.json( { limit: "10000mb" } ));
app.use(bodyParser.urlencoded( { extended: false, limit: "10000mb", parameterLimit: 1000000 } ));


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
     next();
});
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));

app.use(express.json());
 
/*app.use(bodyParser.json({
    limit: '63mb'
  }));
  
  app.use(bodyParser.urlencoded({
    limit: '63mb',
    parameterLimit: 100000,
    extended: true 
  }));*/
 

app.use(helmet());
app.use('/api/users',users);
app.use('/api/auth',auth);
app.use('/api/posts',post);
app.use('/',home);





if(app.get('env') === 'development') { app.use(morgan('tiny'));};
const port = 3030;
//const port = process.env.PORT || 5001;
app.listen(port, () => console.log(`Listening on port ${port}...`));
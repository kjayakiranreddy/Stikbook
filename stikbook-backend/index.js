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


mongoose.connect('mongodb://localhost/stikbook',{useFindAndModify : false})
    .then( ()=>{ console.log('Connected to MongoDB...') })
    .catch(err => console.error('Could not connected to MongoDB...') );


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
const express = require('express');
const app = express();
const bodyParser  = require('body-parser');

const mongoose = require('mongoose');
//specify where to find the schema
const Student = require('./models/bookclub')
//connect and display the status 
mongoose.connect('mongodb://localhost:27017/IT6203_project')
    .then(() => { console.log("connected"); })
    .catch(() => { console.log("error connecting"); });

//specify which domains can make requests and which methods are allowed
app.use((req, res, next) => {
    console.log('This line is always called');
    res.setHeader('Access-Control-Allow-Origin', '*'); //can connect from any host
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS,DELETE'); //allowable methods
    res.setHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
    next();
});

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

//parse application/json
app.use(bodyParser.json())



//to use this middleware in other parts of the application
module.exports=app;
const Express = require("express");
const BodyParser = require("body-parser");
const Routes = require("./Routes");
const Cors = require("cors");
const Mongoose = require("mongoose");
var session = require('express-session');

var server = Express();
server.use(Cors());

Mongoose.connect('mongodb://admin:1234@ds063833.mlab.com:63833/fastfoodonline', err=>{
    if(err){
        console.log(err);
    }
    console.log('Connected to DB');
});

Mongoose.Promise = global.Promise;

server.use('/', Routes);
server.use(BodyParser.urlencoded({extended: false}));
server.use(BodyParser.json());

server.listen(3031, 'localhost', (err) =>{
    if(err){
        console.log(err);
        process.exit(-1);
    }
    console.log("Mocking Food Service on port 3031");
});
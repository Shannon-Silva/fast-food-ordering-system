const Express = require("express");
const BodyParser = require("body-parser");
const Routes = require("./mobile.router");
const Cors = require("cors");

const server = Express();
server.use(Cors());

server.use(BodyParser.urlencoded({extended: false}));
server.use(BodyParser.json());
server.use('/mobile-billing', Routes);

server.listen(3037, 'localhost', (err) =>{
    if(err){
        console.log(err);
        process.exit(-1);
    }
    console.log("Mocking Mobile Billing on port 3037")
});
const Express = require("express");
const BodyParser = require("body-parser");
const Routes = require("./Routes");
const Cors = require("cors");

const server = Express();
server.use(Cors());

server.use(BodyParser.urlencoded({extended: false}));
server.use(BodyParser.json());
server.use('/', Routes);

server.listen(3051, 'localhost', (err) =>{
    if(err){
        console.log(err);
        process.exit(-1);
    }
    console.log("Mocking SMS Service on port 3051")
});
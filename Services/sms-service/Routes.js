var Express = require("express");
var Routes = Express.Router();

const SMSRouter = require('./sms.router');

Routes.use('/sms/',SMSRouter);

module.exports = Routes;

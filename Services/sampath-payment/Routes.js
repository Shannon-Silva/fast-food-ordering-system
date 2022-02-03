var Express = require("express");
var Routes = Express.Router();

const SampathRouter = require('./sampath.router');

Routes.use('/sampath-payment/',SampathRouter);

module.exports = Routes;

var Express = require("express");
var Routes = Express.Router();

const UserRoute = require('./users/user.router');
const FoodRoute = require('./food/food.router');
const OrderRouter = require('./oder.router');

Routes.use('/user/', UserRoute);
Routes.use('/food/', FoodRoute);
Routes.use('/order/',OrderRouter);

module.exports = Routes;
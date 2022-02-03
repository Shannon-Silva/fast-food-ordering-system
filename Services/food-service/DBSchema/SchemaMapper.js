var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FoodSchema = new Schema({
    itemName: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    }
});

const UserSchema = new Schema({
    userName: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    }
});

mongoose.model('Food', FoodSchema);
mongoose.model('User', UserSchema);



module.exports = mongoose;
var mongoose = require('../DBSchema/SchemaMapper');
var FoodSchema = mongoose.model('Food');

var FoodController = function(){
    this.insert = (data) =>{
        return new Promise((resolve, reject)=>{
            var food = new FoodSchema({
                itemName: data.itemName,
                price: data.price                
            });
            food.save().then(()=>{
                resolve({status: 200, message: "Added new item"});
            }).catch(err=>{
                reject({status: 500, message: "Error:-" +err});
            })
        })
    }
  
    this.Search = () =>{
        return new Promise((resolve, reject)=>{
            FoodSchema.find().populate('Food').exec().then(data => {
                resolve({status: 200, data: data});
            }).catch(err=>{
                reject({status: 500, message: "Error:-" +err});
            })
        })
    }

}

module.exports= new FoodController();
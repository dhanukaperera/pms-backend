var mongoose = require('mongoose');

module.exports = mongoose.model('stocks',{
    drugName:String,
    unitType:String,
    drugCategory:String,
    drugPrice:String,
    drugQuantity:String
});
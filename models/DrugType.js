/**
 * Created by Sachin on 6/29/2017.
 */
let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let DrugTypeSchema = new Schema({
    name:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('DrugType', DrugTypeSchema);

/*var drugtypesschema = mongoose.Schema({
    Name:{
        type: String,
        required: true
    }
});*/

//var drugtypeinformation = module.exports = mongoose.model('drugtypes', drugtypesschema);

//Get Categories
/*
module.exports.getdrugtypes = function (callback, limit) {
    drugtypeinformation.find(callback).limit(limit);
}

//Add Categories
module.exports.adddrugtypes = function (drugtype, callback) {
    drugtypeinformation.create(drugtype, callback);
}
*/

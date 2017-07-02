/**
 * Created by Sachin on 6/29/2017.
 */
let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let DrugCategorySchema= new Schema({
    name:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('DrugCategory', DrugCategorySchema);


/*
var categoriesschema = mongoose.Schema({
    Name:{
        type: String,
        required: true
    }
});
*/



//var categorieinformation = module.exports = mongoose.model('Categories', categoriesschema);

//Get Categories
/*
module.exports.getcategories = function (callback, limit) {
    categorieinformation.find(callback).limit(limit);
}

//Add Categories
module.exports.addcategories = function (categorie, callback) {
    categorieinformation.create(categorie, callback);
}
*/

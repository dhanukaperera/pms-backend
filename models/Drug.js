/**
 * Created by Sachin on 6/29/2017.
 */
let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let DrugSchema= new Schema({
    category:{
        type: Schema.Types.ObjectId,
        ref: 'DrugCategory',
        required: true
    },
    type:{
        type: Schema.Types.ObjectId,
        ref: 'DrugType',
        required: true
    },
    name:{
        type: String,
        required: true
    },
    price:{
        type: Number
    },
    reorderLevel:{
        type: Number
    },
    dangerLevel:{
        type: Number
    },
    Remarks:{
        type: String
    },
    quantity:{
        type: Number
    }
});

module.exports = mongoose.model('drug', DrugSchema);

//var druginformation = module.exports = mongoose.model('Drug', druginformationschema);

/*
//Get Drugs
module.exports.getdrugs = function (callback, limit) {
    druginformation.find(callback).limit(limit);
}

//Add Drugs
module.exports.adddrugs = function (drug, callback) {
    druginformation.create(drug, callback);
}*/

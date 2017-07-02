/**
 * Created by Dhanuka Perera on 5/10/2017.
 */
/*
var mongoose = require('mongoose');

module.exports = mongoose.model('drug_requests',{
    requestID:String,
    drugID:String,
    drugName:String,
    requestedQuantity:String,
    availableQuantity:String,
    requestedDate:String,
    approvedQuantity:String,
    approve:String
});*/
let mongoose = require('mongoose');

let Schema = mongoose.Schema;
let DrugRequestSchema = new Schema({
    drugName: {
        type: String,
        required: true
    },
    requestedQty: {
        type: Number,
        required: true
    },
    avaiableQty: {
        type: Number,
        required: true
    },
    requestedDate: {
        type: Date,
        default: Date.now()
    },
    status: {
        type: String,
        required: true
    },
    approveQty: {
        type: Number
    },
    approve:{
        type:Boolean
    }
});

module.exports = mongoose.model('DrugRequest', DrugRequestSchema);
/**
 * Created by Chamod Ratnayaka on 2017-05-12.
 */

let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let SuppliersSchema= new Schema({
    supplierName: {
        type: String,
        required: true
    },
    supplierId: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    drugs: [{
        drugName: {
            type: String,
            required: true
        },
        drugCategory: {
            type: String,
            required: true
        }
    }]
});

module.exports = mongoose.model('Supplier', SuppliersSchema);
/*
module.exports = mongoose.model('suppliers', {
    supplierName: {
        type: String,
        required: true
    },
    supplierId: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    drugName: {
        type: String,
        required: true
    },
    drugCategory: {
        type: String,
        required: true
    }

});
*/


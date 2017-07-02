'use strict';

const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let BatchSchema = new Schema({
    drugname: {
        type: String,
        required: true
    },
    batchNumber: {
        type: String,
        required: true,
        unique: true
    },
    quantity: {
        type: Number,
        required: true
    },
    manufacureDate: {
        type: Date,
        required: true
    },
    expireDate: {
        type: Date,
        required: true
    },
    batchType: {
        type: Schema.Types.ObjectId,
        ref: 'BatchType'
    },
    content: {
        type:Schema.Types.ObjectId,
        ref: 'BatchContent'
    },
    contentType: {
        type: Schema.Types.ObjectId,
        ref: 'BatchContentType'
    },
    numberOfCartoons: {
        type: Number
    },
    numberOfBottlesPerCartoon: {
        type: String
    },
    numberOfTabletsPerBottle: {
        type: Number
    },
    numberOfCardsPerCartoon: {
        type: Number
    },
    numberOfTabletsPerCard: {
        type: Number
    },
    numberOfBottles: {
        type: Number
    },
    tabletsPerBottle: {
        type: Number
    }
});

module.exports = mongoose.model('Batch', BatchSchema);

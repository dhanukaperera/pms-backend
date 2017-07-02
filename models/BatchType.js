'use strict';

const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let BatchTypeSchema = new Schema({
    batchType: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('BatchType', BatchTypeSchema,'batchtypes');
'use strict';

const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let BatchContentType = new Schema({
    batchContentType: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('BatchContentType', BatchContentType);
'use Strict';

let mongoose = require(`mongoose`);

let Schema = mongoose.Schema;

let BatchContentSchema = new Schema({
    batchContent: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('BatchContent', BatchContentSchema);
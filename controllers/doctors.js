/**
 * Created by Lasitha on 6/29/2017.
 */


var Doctor = require('../models/Doctor');

module.exports = {

    getDoctors: function (req, res) {
        Doctor.find({}).exec(function (err, result) {
            res.send(result);
        })
    }
}
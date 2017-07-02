/**
 * Created by Lasitha on 6/29/2017.
 */
var Patient = require('../models/Patient');

module.exports = {

    getPatient: function (req, res) {
        Patient.find({}).exec(function (err, result) {
            res.send(result);
        })
    }
}
/**
 * Created by Lasitha on 5/12/2017.
 */
var Prescriptions = require('../models/Prescription');


module.exports={
    get: function (req,res) {
        Prescriptions.find({}).exec(function (err, result) {
            res.send(result);
        })
    }

}
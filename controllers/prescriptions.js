/**
 * Created by Lasitha on 5/12/2017.
 */
var Prescriptions = require('../models/Prescription');


module.exports={
    get: function (req,res) {
        Prescriptions.find({}).exec(function (err, result) {
            res.send(result);
        })
    },

    post: function (req, res) {
        console.log(req.body);

        // req.body.user = req.user;

        var message = new Prescriptions(req.body);

        message.save();

        res.status(200);
        //console.log()

    }
}
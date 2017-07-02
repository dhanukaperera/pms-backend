/**
 * Created by Chamod Ratnayaka on 2017-06-29.
 */


var Prescriptions = require('../models/Prescription');



module.exports={


    post: function (req, res) {
        console.log(req.body);

        // req.body.user = req.user;

        var message = new Prescriptions(req.body);

        message.save();

        res.status(200);
        //console.log()

    }
}
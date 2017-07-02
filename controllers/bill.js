/**
 * Created by Lasitha on 6/29/2017.
 */

var Bill = require('../models/Bill');

module.exports = {

    addBiil: function (req, res) {
        console.log(req.body);

        // req.body.user = req.user;

        var message = new Bill(req.body);
        message.save();
        res.status(200);
        //console.log()

    }
}


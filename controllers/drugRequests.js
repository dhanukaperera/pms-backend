/**
 * Created by Dhanuka Perera on 5/10/2017.
 */
var DrugRequests = require('../models/DrugRequests');

module.exports = {
    get: function (req, res) {
        DrugRequests.find({}).exec(function (err, result) {
            res.send(result);
        })
    },

    post: function (req, res) {
        console.log(req.body);

       // req.body.user = req.user;

        var message = new DrugRequests(req.body);

        message.save();

        res.status(200);
        //console.log()

    }
}
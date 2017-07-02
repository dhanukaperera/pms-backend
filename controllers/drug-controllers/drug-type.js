/**
 * Created by Sachin on 6/29/2017.
 */
var Drugtypes = require('../../models/DrugType');

module.exports = {
    get: function (req, res) {
        Drugtypes.find({}).exec(function (err, result) {
            res.send(result);
        })
    },
    post: function (req, res) {
        console.log(req.body);
        var message = new Drugtypes(req.body);
        message.save();
        res.status(200);
    }
}
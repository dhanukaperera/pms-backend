/**
 * Created by Sachin on 6/29/2017.
 */
var Categories = require('../../models/DrugCategory');

module.exports = {
    get: function (req, res) {
        Categories.find({}).exec(function (err, result) {
            res.send(result);
        })
    },
    post: function (req, res) {
        console.log(req.body);
        var message = new Categories(req.body);
        message.save();
        res.status(200);
    }
}
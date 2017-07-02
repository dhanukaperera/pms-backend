/**
 * Created by Chamod Ratnayaka on 2017-05-12.
 */

var Supplier = require('../../models/Supplier');

module.exports = {
    get: function (req, res) {
        Supplier.find({}).exec(function (err, result) {
            res.send(result);
        })
    },

  /*  post: function (req,res) {
    console.log(req.body);
    collection('suppliers').insert(req.body, function (err, doc) {
        res.json(doc);
    });


}*/

    addsuppliers: function (req, res) {
        console.log(req.body);
        var message = new Supplier(req.body);
        message.save();
        res.status(200);
    }


}
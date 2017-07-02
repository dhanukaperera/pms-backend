var Stocks = require('../models/Stocks');

module.exports = {
    get: function (req, res) {
        Stocks.find({}).exec(function (err, result) {
            if(err){
                throw err;
            }
            res.send(result);
        })
    }


}
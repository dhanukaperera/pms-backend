/**
 * Created by Sachin on 6/29/2017.
 */

var Drugs = require('../../models/Drug');

module.exports = {
    getAllDrugDeatils:(req,res)=>{
        Drugs.find().populate('category').populate('type').exec().then(drug=>{
            if(drug.length!=0){
                res.json(drug);
            }else{
                res.sendStatus(404);
            }
            console.log(drug);
        }).catch(err=>{
            throw err;
            res.sendStatus(500);
        })
    },
    addNewDrug : (req,res)=>{
        const newDrug = new Drugs(req.body);
        newDrug.save().then(newDrug=>{
            res.sendStatus(200)
            console.log(newDrug);
        }).catch(err=>{
            throw err;
            res.sendStatus(500);
        })
    },
    updateDrug: (req, res) => {
        const drug = req.body;
        delete drug._id;
        const drugId = req.params.id;
        Drugs.findByIdAndUpdate(drugId, {$set: drug}).then(updateDrug => {
            res.json(drug);
        }).catch(err => {
            throw err;
        })
    },
    removeDrug: (req, res) => {
        Drugs.findByIdAndRemove(req.params.id).then(drug => {
            res.sendStatus(200);
            console.log(drug);
        }).catch(err => {
            throw err;
            res.sendStatus(500);
        })
    }
};

/*
var Drugs = require('../../models/Drug');

module.exports = {
    get: function (req, res) {
        Drugs.find({}).populate('category').populate('type').exec(function (err, result) {
            res.send(result);
        })
    },
    post: function (req, res) {
        console.log(req.body);
        var message = new Drugs(req.body);
        message.save();
        res.status(200);
    }

}*/
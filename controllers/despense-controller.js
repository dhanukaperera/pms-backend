/**
 * Created by Lasitha on 6/29/2017.
 */
let Bill = require('../models/Bill');
let Prescriptions = require('../models/Prescription');
let Batch=require('../models/Batch');
let Drug=require('../models/Drug')
let a=require('../models/Patient')


module.exports = {


    addBiils: (req,res)=>{
        const bill = new Bill(req.body);
        bill.save().then(bill=>{
            res.sendStatus(200)
            console.log(bill);
        }).catch(err=>{
            throw err;
            res.sendStatus(500);
        })
    },


    getBiils:(req,res)=>{
    Bill.find().populate('prescription').populate('patient').exec().then(result=>{
        if(result.length!=0){
            res.json(result);
        }else{
            res.sendStatus(404);
        }
        console.log(result);
    }).catch(err=>{
        throw err;
        res.sendStatus(500);
    })
},

    getBiilById:(req,res)=>{
        var id=req.params._id;
        Bill.find({_id:id}).populate('prescription').populate('patient').exec().then(result=>{
            if(result.length!=0){
                res.json(result);
            }else{
                res.sendStatus(404);
            }
            console.log(result);
        }).catch(err=>{
            throw err;
            res.sendStatus(500);
        })
    },

  /*  getPrescriptions: function (req,res) {
        Prescriptions.find({}).populate('doctor').populate('patient').populate('drugs').exec(function (err, result) {
            console.log(result)
            if(err){
                throw err;
                res.sendStatus(500);
            }
            if(result.length<1){
                res.json(result);
            }else{
                res.sendStatus(404);
            }
        })
    },*/

    getPrescriptions:(req,res)=>{
        Prescriptions.find().populate('patient').exec().then(result=>{
            if(result.length!=0){
                res.json(result);
            }else{
                res.sendStatus(404);
            }
            console.log(result);
        }).catch(err=>{
            throw err;
            res.sendStatus(500);
        })
    },


  /*  getPrescriptionByName: function (req, res) {
       var name=req.params.patientName;
       console.log(name);
            Prescriptions.find({patientName:name}).then(r=>{
            if(r.length!=0){
                res.json(r);
            }else{
                res.send("No Record Found");
            }
        }).catch(err=>{
            throw err;
            res.sendStatus(500);
        })
    },*/

    getPrescriptionByPatient: (req,res)=>{
        var patientN=req.params.patient;
        Prescriptions.find({patient:patientN}).populate('patient').exec().then(result=>{
            if(result.length!=0){
                res.json(result);
            }else{
                res.sendStatus(404);
            }
            console.log(result);
        }).catch(err=>{
            throw err;
            res.sendStatus(500);
        })
    },

    getPrescriptionById: (req,res)=>{
        var id=req.params._id;
        Prescriptions.find({_id:id}).populate('patient').populate('drug').exec().then(result=>{
            if(result.length!=0){
                res.json(result);
            }else{
                res.sendStatus(404);
            }
            console.log(result);
        }).catch(err=>{
            throw err;
            res.sendStatus(500);
        })
    },



    getDrugByID:(req,res)=>{
        var id=req.params._id;
        Drug.find({_id:id}).populate('category').populate('type').exec().then(result=>{
            if(result.length!=0){
                res.json(result);
            }else{
                res.sendStatus(404);
            }
            console.log(result);
        }).catch(err=>{
            throw err;
            res.sendStatus(500);
        })
    },

    getBatchByName:(req,res)=>{
        var id=req.params._id;
        Drug.find({_id:id}).populate('batchType').populate('content').populate('contentType').exec().then(result=>{
            if(result.length!=0){
                res.json(result);
            }else{
                res.sendStatus(404);
            }
            console.log(result);
        }).catch(err=>{
            throw err;
            res.sendStatus(500);
        })
    }


}


/**
 * Created by Dhanuka Perera on 7/2/2017.
 */
'use Strict'

const DrugRequest = require('../models/DrugRequests');

module.exports={
    getAllDrugRequests:(req,res)=>{
        DrugRequest.find().then(drugRequests=>{
            if(drugRequests.length!=0){
                res.json(drugRequests);
            }else {
                res.sendStatus(404);
            }
        }).catch(err=>{
            throw err;
            res.sendStatus(500);
        })
    },
    addRequests : (req,res)=>{
       const newDrugRequest = new DrugRequest(req.body);
        newDrugRequest.save().then(newDrugRequest=>{
            res.sendStatus(200);
            console.log(newDrugRequest);
        }).catch(err=>{
            throw err;
            res.sendStatus(500);
        })
    },
    approveReqjectRequest : (req,res)=>{
            let approveStatue =req.body.status;
            DrugRequest.findByIdAndUpdate(req.params.id,{$set:{status:approveStatue}}).then(status=>{
                res.sendStatus(200);
            }).catch(err=>{
                throw err;
                res.sendStatus(500);
            });
    }
}
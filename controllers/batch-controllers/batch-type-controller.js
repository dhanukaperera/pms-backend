'use Strict'

const BatchType = require('../../models/BatchType');

module.exports={
    // Get all batch Types
    getAllBatchTypes : (req,res)=>{
        BatchType.find().then(batchType=>{
            if(batchType.length!=0){
                res.json(batchType);
            }else{
                res.sendStatus(404);
            }
        }).catch(err=>{
            throw err;
            res.sendStatus(500);
        })
    },
    
    // Add new batch type
    addNewBatchType : (req,res)=>{
        const newBatchType = new BatchType(req.body);
        newBatchType.save().then(newBatchType=>{
            res.sendStatus(200);
            console.log(newBatchType);
        }).catch(err=>{
            throw err;
            res.sendStatus(500);
        })
    }
};
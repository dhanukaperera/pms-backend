'use Strict'

const BatchContent = require('../../models/BatchContent');

module.exports={
    // Get all batch content names
    getAllBatchContents : (req,res)=>{
        BatchContent.find().then(batchContent=>{
            if(batchContent.length!=0){
                res.json(batchContent);
            }else{
                res.sendStatus(404);
            }
            console.log(batchContent);
        }).catch(err=>{
            throw err;
            res.sendStatus(500);
        })
    },
    
    // Add new batch conent
    addNewBatchConetent : (req,res)=>{
        const newBatchContent = new BatchContent(req.body);
        newBatchContent.save().then(newBatchContent=>{
            res.sendStatus(200);
            console.log(newBatchContent);
        }).catch(err=>{
            throw err
            res.sendStatus(500);
        });
    }
};
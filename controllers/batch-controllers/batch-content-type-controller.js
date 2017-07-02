'use Strict'

const BatchContentType = require('../../models/BatchContentType');

module.exports={
   // Get batch all batch content types
    getAllBatchContentTypes : (req,res)=>{
        BatchContentType.find().then(batchContentType=>{
           if(batchContentType.length!=0){
               res.json(batchContentType);
           }else{
               res.sendStatus(404);
           }
        }).catch(err=>{
            throw err;
            res.sendStatus(500);
        })
    },
    
    // Add new Batch Content Type
    addNewBatchContentType : (req,res)=>{
        const newBatchContentType = new BatchContentType(req.body);
        newBatchContentType.save().then(newBatchContentType=>{
            res.sendStatus(200);
            console.log(newBatchContentType);
        }).catch(err=>{
            throw err;
            res.sendStatus(500);
        })
    }
    
};
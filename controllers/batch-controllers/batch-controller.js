/**
 * Created by Dhanuka Perera on 6/29/2017.
 */
'use strict';

const Batch = require('../../models/Batch');
const Drug = require('../../models/Drug');
const BatchType = require('../../models/BatchType');

module.exports = {
    getAllBatchDeatils:(req,res)=>{
        Batch.find().populate('batchType').populate('content').exec().then(batch=>{
            if(batch.length!=0){
                res.json(batch);
            }else{
                res.sendStatus(404);
            }
            console.log(batch);
        }).catch(err=>{
            throw err;
            res.sendStatus(500);
        })
    },
    addNewBatch : (req,res)=>{
        const newBatch = new Batch(req.body);
        newBatch.save().then(newBatch=>{
            res.sendStatus(200)
            console.log(newBatch);
        }).catch(err=>{
            throw err;
            res.sendStatus(500);
        })
    },
    getDrugNamesByCategory:(req,res)=>{
        const paramCategory = req.params.Category;
        console.log(paramCategory);
        Drug.find({category:paramCategory}).populate('category').populate('type').exec().then(drugList=>{
            if(drugList.length!=0){
                res.json(drugList);
                console.log(drugList);
            }else{
                res.sendStatus(404);
                console.log("No Drug Found");
            }
        }).catch(err=>{
           throw err;
           res.sendStatus(500);
        });
    },
    getDrugquantity : (req,res)=>{
      Drug.findById(req.params.id).select('quantity').exec().then(drug=>{
          if(drug.length!=0){
              res.json(drug.quantity);
          }else{
              res.sendStatus(404);
          }
          console.log(drug);
      }).catch(err =>{
          throw err;
          res.sendStatus(500);
      })
    },
    updateDrugQty : (req,res)=>{
        let qty = req.body.quantity ;
        const drugId = req.params.id;
        console.log(qty);
        console.log(drugId);
        Drug.findByIdAndUpdate(drugId,{$set:{quantity:qty}}).then(updateDrugQty=>{
            res.sendStatus(200);
            console.log(updateDrugQty);
        }).catch(err=>{
            throw err;
            res.sendStatus(500);
        })
    }

};
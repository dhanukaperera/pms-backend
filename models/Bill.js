/**
 * Created by Lasitha on 6/29/2017.
 */
let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let BillSchema= new Schema({
    prescription:{
        type: Schema.Types.ObjectId,
        ref: 'Prescription',
        required: true
    },
    patient:{
        type: Schema.Types.ObjectId,
        ref: 'Patient',
        required: true
    },
    date:{
        type:Date,
        default:Date.now()
    },
    drugs:[{
        name:String,
        price:Number,
        qty:Number,
        totalPrice:Number
    }],
    netTotal:{
        type:Number
    }

});
module.exports = mongoose.model('Bill', BillSchema);

/*module.exports=mongoose.model('bills',{

    prescriptionId:{
        type:String,
        required:true
    },
    patientName:{
        type:String,
        required:true
    },

    patientId:{
        type:String,
        required:true
    },

    date:{
        type:Date,
        default:Date.now()
    },
    drugs:[{
        drugId:String,
        name:String,
        unitType:String,
        unitPrice:Number,
        qty:Number,
        totalPrice:Number
    }],
    netTotal:Number
});*/

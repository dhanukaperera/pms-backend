let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let PatientSchema = new Schema({
    p_id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },

    address: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },
    contactNo: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model('Patient', PatientSchema);
/*
 module.exports=mongoose.model('patient',
 {
 p_id:{
 type:String,
 required:true
 },

 fname:{
 type:String,
 required:true
 },
 lname: {
 type: String,
 required: true
 },
 address: {
 type: String,
 required: true
 },

 email: {
 type: String,
 required: true
 },
 contactNo: {
 type: String,
 required: true
 }

 });
 */

/**
 * Created by Lasitha on 6/29/2017.
 */
let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let DoctorSchema= new Schema({
    registration_no:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    specialization: {
        type: true,
        required: true
    },
    email: {
        type: String
    } ,
    contactNo: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Doctor', DoctorSchema);
/*
module.exports=mongoose.model('doctors',
    {
        registration_no:{
            type:String,
            required:true
        },
        name:{
            type:String,
            required:true
        },
       specialization: {
           type: true,
           required: true
       },
        email: {
            type: String
        } ,
        contactNo: {
            type: String,
            required: true
        }

    });*/

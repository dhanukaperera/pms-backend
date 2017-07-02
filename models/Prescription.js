/**
 * Created by Chamod on 5/12/2017.
 */
let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let PrescriptionSchema= new Schema({
    doctor:{
        type: Schema.Types.ObjectId,
        ref: 'Doctor',

    },
    patient:{
        type: Schema.Types.ObjectId,
        ref: 'Patient',
        required: true
    },
    drugs:[{
        name:{
            type:String

        },
        price: {
            type: Number

        },
        unitType: {
            type: Number

        },

        dosage: {
            type: Number,

        },
        frequency: {
            type: Number,

        },
        timePeriod: {
            type: Number,

        },

        issueStatus: {
            type: Number,

        },
    }],

    status: {
        type: String,
        required: true
    },
    date: {
        type: Date,

    }
});

module.exports = mongoose.model('Prescription', PrescriptionSchema);

/*
module.exports = mongoose.model('prescriptions', {


    doctorId: {
        type: String,
        required: true
    },
    doctorName: {
        type: String,
        required: true
    },

    patientId: {
        type: String,
        required: true
    },
    patientName: {
        type: String,
        required: true
    },

    drug: [{
        drugId: {
            type: String,
            required: true
        },
        drugName: {
            type: String,
            required: true
        },

        unitType: {
            type: String,
            required: true
        },
        dosage: {
            type: Number,
            required: true
        },
        frequency: {
            type: Number,
            required: true
        },
        timePeriod: {
            type: Number,
            required: true
        },

        issueStatus: {
            type: String,
            required: true
        },


    }],

    status: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }


});

*/

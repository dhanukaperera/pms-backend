'use strict';
//-- Requiring Node modules -----------------------------
const express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    cors = require('cors'),
    propertiesReader = require('properties-reader');

// Creating express application -------------------------
const app = express();
const properties = propertiesReader('./config/settings/app.properties');
const port = properties.get('server.port');


let batchTypes = require('./controllers/batch-controllers/batch-type-controller');
let batchContents = require('./controllers/batch-controllers/batch-content-controller');
let batchContentTypes = require('./controllers/batch-controllers/batch-content-type-controller');
let batches = require('./controllers/batch-controllers/batch-controller');
//_______________________________________________________
//let stocks = require('./controllers/stocks');
let drugRequests = require('./controllers/drugRequests');
let prescriptions = require('./controllers/prescriptions');

//let addsuppliers = require('./controllers/addSuppliers');
let addprescription = require('./controllers/add-prescription');
//sachin controller files
let Druginfo = require('./controllers/drug-controllers/drug-handling');
let DrugCategories = require('./controllers/drug-controllers/drug-category');
let DrugTypes = require('./controllers/drug-controllers/drug-type');

//relrated to drug despense(lasitha)
var drugDespense = require('./controllers/despense-controller');
//related to suppliers
let addsuppliers = require('./controllers/suppliers-controllers/add-supplier');
let patient = require('./controllers/patient');

//-- Middleware -------------------------------------------------
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());
app.use(cors());

//-- APIs -------------------------------------------------------

//== Drug Service ===============================================
app.get('/drugs/getAll', Druginfo.getAllDrugDeatils);
app.post('/drugs/addDrug', Druginfo.addNewDrug);

app.get('/drugs/categories/getAll', DrugCategories.get);
app.post('/drugs/categories/add', DrugCategories.post);
app.put(`/drugs/:id`,Druginfo.updateDrug);
app.delete(`/drugs/:id`,Druginfo.removeDrug);

app.get('/drugs/types/getAll', DrugTypes.get);
app.post('/drugs/types/add', DrugTypes.post);

app.get('/drugs/getDrugsByCategory/:Category', batches.getDrugNamesByCategory);


app.get('/drugs/getDrugQty/:id', batches.getDrugquantity);
app.put('/drugs/updateDrugQty/:id', batches.updateDrugQty);

//===============================================================

//== Prescriptions ==============================================
app.get('/prescriptions/getAll', prescriptions.get)

//===============================================================

//== Drug Despense //== Prescriptions ===========================
app.get('/despense/prescriptions/getAll', drugDespense.getPrescriptions);
//app.get('/despense/prescriptions/patients/:patientName', drugDespense.getPrescriptionByName);
app.get('/despense/prescriptions/getById/:_id', drugDespense.getPrescriptionById);
//===============================================================

//== Bills ======================================================
app.post('/bills/add', drugDespense.addBiils);
//===============================================================

//== Batch ======================================================
app.get('/batches/types/getAll', batchTypes.getAllBatchTypes);
app.post('/batches/types/add', batchTypes.addNewBatchType);

app.get('/batches/contents/getAll', batchContents.getAllBatchContents);
app.post('/batches/contents/add', batchContents.addNewBatchConetent);

app.get('/batches/contentTypes/getAll', batchContentTypes.getAllBatchContentTypes);
app.post('/batches/contentTypes/add', batchContentTypes.addNewBatchContentType);

app.post('/batches/addBatch', batches.addNewBatch);
app.get('/batches/getAllBatches', batches.getAllBatchDeatils);

//===============================================================
app.post('/suppliers/add-Suppliers',addsuppliers.addsuppliers);
app.post('/prescriptions/add',addprescription.post);

let drugRequestsC = require('./controllers/drug-requests-controller');

app.get('/drugRequests/getAll',drugRequestsC.getAllDrugRequests);
app.post('/drugRequests/add',drugRequestsC.addRequests);
app.put('/drugRequests/approve/:id',drugRequestsC.approveReqjectRequest);
// ===============================================================

//-- Misc
//let drugDespense =require('./controllers/d')
//app.get('/app/batch/drugname/:drugname', drugDespense.getBatchByDrug);
//app.get('/app/batch/drugname/:drugname', drugDespense.getBatchByDrug);
//app.get('/app/batch/id/:_id', drugDespense.getBatchByID);
//app.get('/app/drug/id/:_id', drugDespense.getDrugByID);


// -- Supplier

// --------------------------------------------------------------


//API End - Points
//app.get('/api/stock', stocks.get);

//app.get('/api/drugRequests', drugRequests.get);
//app.post('/api/drugRequests', drugRequests.post);
//app.get('/api/add-suppliers', addsuppliers.get);
/*app.get('/api/prescriptions', prescriptions.get)*/
//app.post('/api/addSuppliers',addSuppliers.post);

//sachin workspace
/*app.get('/api/getdruginformation',Druginfo.get);
 app.post('/api/druginformation', Druginfo.post);
 app.get('/api/getcategories',DrugCategories.get);
 app.post('/api/categories', DrugCategories.post);
 app.get('/api/getdrugtypes',DrugTypes.get);
 app.post('/api/drugtypes', DrugTypes.post);*/

//lasitha workspace
/*app.get('/api/prescriptions',drugDespense.getPrescriptions);
 app.post('/api/bills',drugDespense.addBiils);
 app.get('/api/prescriptions/patient/:patientName',drugDespense.getPrescriptionByName);
 app.get('/api/prescriptions/:_id',drugDespense.getPrescriptionById);
 app.get('/app/batch/drugname/:drugname',drugDespense.getBatchByDrug);
 app.get('/app/batch/drugname/:drugname',drugDespense.getBatchByDrug);
 app.get('/app/batch/id/:_id',drugDespense.getBatchByID);
 app.get('/app/drug/id/:_id',drugDespense.getDrugByID);*/

// ----------------------------------------------------------------------
/*app.get('/batches/getAllBatchTypes', batchTypes.getAllBatchTypes);
app.post('/batches/addNewBatchType', batchTypes.addNewBatchType);

app.get('/batches/getAllBatchContent', batchContents.getAllBatchContents);
app.post('/batches/addNewBatchContent', batchContents.addNewBatchConetent);

app.get('/batches/getAllBatchContentTypes', batchContentTypes.getAllBatchContentTypes);
app.post('/batches/addNewBatchContentType', batchContentTypes.addNewBatchContentType);*/

// This api use to get drug names. This api used in add batch View.
//app.get('/drugs/getDrugNames',batches.getDrugNames);

// ----------------------------------------------------------------------


let connection = {
    host: properties.get('database.host'),
    port: properties.get('database.port'),
    database: properties.get('database.database'),
    user: properties.get('database.user'),
    password: properties.get('database.password')
};

//-- Connecting to mongodb ---------------------------------------
mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://${connection.user}:${connection.password}${connection.host}:${connection.port}/${connection.database}`, err => {
    if (err) {
        throw err;
        process.exit(1);
    }
    console.log(`Successfully connected to mongodb`);
});

//-- Starting the server -------------------------------------------
app.listen(port, err => {
    if (err) {
        throw err;
        return;
    }
    console.log(`Application start on  port ${port}`);
});
//crudModel.js
let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let { model } = mongoose;

let crudSchema = new Schema({
    crud: { 
        name: { type: String, required: true },
        email: { type: String, required: true }
    },
});

const CRUDModel = model('CRUDModel', crudSchema);

module.exports = CRUDModel;

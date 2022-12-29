const mongoose = require('mongoose');
<<<<<<< HEAD:Modelos/gastoComun.js
const Schema = mongoose.Schema;
const gastoComunSchema = new Schema({
    vecino:{
        type: Object.ProductId,
        reference: 'vecino'
    },
    boleta:{
        type: Object.ProductId,
        reference: 'boleta'
=======
const vecino = require('./vecino');
const Schema = mongoose.Schema;
const gastoComunSchema = new Schema({
    nombreGastoComun:{
        type: String,
        unique: true
>>>>>>> 33af20471e61fd6b995d38512385b055b6900bd6:backend/Modelos/gastoComun.js
    },
    montoGastoComun:{
        type: Number,
        require: true
<<<<<<< HEAD:Modelos/gastoComun.js
=======
    },
    vecino:{
        type: Schema.ObjectId,
        ref: 'vecino'
>>>>>>> 33af20471e61fd6b995d38512385b055b6900bd6:backend/Modelos/gastoComun.js
    }
});

module.exports=mongoose.model('gastoComun', gastoComunSchema);
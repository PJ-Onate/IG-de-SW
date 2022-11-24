const mongoose = require('mongoose');
const vecino = require('./vecino');
const Schema = mongoose.Schema;
const gastoComunSchema = new Schema({
    nombreGastoComun:{
        type: String,
        unique: true
    },
    montoGastoComun:{
        type: Number,
        require: true
    },
    vecino:{
        type: Schema.ObjectId,
        ref: 'vecino'
    }
});

module.exports=mongoose.model('gastoComun', gastoComunSchema);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const gastoComunSchema = new Schema({
    vecino:{
        type: Object.ProductId,
        reference: 'vecino'
    },
    boleta:{
        type: Object.ProductId,
        reference: 'boleta'
    },
    montoGastoComun:{
        type: Number,
        require: true
    }
});

module.exports=mongoose.model('gastoComun', gastoComunSchema);
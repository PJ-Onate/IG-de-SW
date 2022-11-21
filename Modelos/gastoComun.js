const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const gastoComunSchema = new Schema({
    nombreGastoComun:{
        type: String,
        unique: true
    },
    montoGastoComun:{
        type: Number,
        require: true
    }
});

module.exports=mongoose.model('gastoComun', gastoComunSchema);
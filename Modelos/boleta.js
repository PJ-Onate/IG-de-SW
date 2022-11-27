const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const boletaSchema = new Schema({
    tipoGastoTotal:{
        type: String,
        unique: true
    },
    montoGastoTotal:{
        type: Number,
        require: true
    },
    periodoPago:{
        type: String,
        require: true
    }
});

module.exports=mongoose.model('boleta', boletaSchema);
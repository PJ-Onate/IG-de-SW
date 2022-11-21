const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const gastosTotalesSchema = new Schema({
    tipoGastoTotal:{
        type: String,
        unique: true
    },
    montoGastoTotal:{
        type: Number,
        require: true
    },
    //periodoPago:{
    //    type: String,
    //    require: true
    //},
    fechaGastoTotal:{
        type: Date,
        require: true
    }
});

module.exports=mongoose.model('gastosTotales', gastosTotalesSchema);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const boletaSchema = new Schema({
<<<<<<< HEAD:Modelos/boleta.js
    tipoGastoTotal:{
        type: String,
        unique: true
    },
    montoGastoTotal:{
        type: Number,
        require: true
    },
    periodoPago:{
=======
    tipoBoleta:{
        type: String,
        require: true
    },
    montoBoleta:{
        type: Number,
        require: true
    },
    fechaBoleta:{
>>>>>>> 33af20471e61fd6b995d38512385b055b6900bd6:backend/Modelos/boleta.js
        type: String,
        require: true
    }
});

module.exports=mongoose.model('boleta', boletaSchema);
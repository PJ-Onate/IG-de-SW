const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const boletaSchema = new Schema({
    tipoBoleta:{
        type: String,
        require: true
    },
    montoBoleta:{
        type: Number,
        require: true
    },
    fechaBoleta:{
        type: String,
        require: true
    }
});

module.exports=mongoose.model('boleta', boletaSchema);
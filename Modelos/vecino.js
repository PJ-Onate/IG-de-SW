const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const vecinoSchema = new Schema({
    rut:{
        type: String,
        required: true
    },
    nombre:{
        type: String,
        required: true
    },
    domicilio:{
        type: String,
        required: true
    },
    numDomicilio:{
        type: Number,
        required: true
    },
    estado:{
       type: Schema.ObjectId,
       ref: 'estado'
    }
   

});

module.exports = mongoose.model('Vecino', vecinoSchema);
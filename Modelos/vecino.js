const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const vecinoSchema = new Schema({
    nombre:{
        type: String,
        require: true
    },
    apellido:{
        type: String,
        require: true
    },
    rut: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        unique: true
    },
    estado: {
        type: String,
        require: true
    },
    deudaAcumulada: {
        type: Number,
        require: true
    }
});

module.exports = mongoose.model('Vecino', vecinoSchema);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const EstadoSchema = new Schema({
    descripcion:{
        type: String,
        unique: true
    },
    numEstado:{
        type: Number,
        unique: true
    }
});

module.exports=mongoose.model('estadoModelo', EstadoSchema);

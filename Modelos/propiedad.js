const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PropiedadSchema = new Schema({
    costo:{
        type: Number,
        required: true
    },
    ubicacion:{
        type: String,
        requiered: true
    }, 
    tamanio:{
        type: Number,
        requiered: true
    },
    tipo:{
        type: String,
        requiered: true
    }
    /*propietario:{z
        type: Schema.ObjectId,
        ref: "propietarioModelo"
    },*/              
});

module.exports=mongoose.model('propiedadModelo', PropiedadSchema);

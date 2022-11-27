const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const casaSchema = new Schema({
    numCasa:{
        type: Number,
        unique: true
    },
    direccion:{
        type: String,
        require: true
    },
    precio:{
        type: Number,
        require: true
    },
    mCuadrados:{
        type: Number,
        require: true
    },
    vecino:{
        type: Schema.ObjectId,
        ref: 'vecino'
    }
});

module.exports=mongoose.model('casa', casaSchema);

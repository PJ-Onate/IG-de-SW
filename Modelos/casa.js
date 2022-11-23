const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const casaSchema = new Schema({
    numCasa:{
        type: Number,
        unique: true
    },
    vecino:{
        type: Schema.ObjectId,
        ref: 'vecino'
    }
});

module.exports=mongoose.model('casa', casaSchema);

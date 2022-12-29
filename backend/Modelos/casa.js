const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const casaSchema = new Schema({
    numCasa:{
        type: Number,
        unique: true
    },
<<<<<<< HEAD:Modelos/casa.js
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
=======
     vecino:{
         type: Schema.ObjectId,
         ref: 'vecino'
  }
>>>>>>> 33af20471e61fd6b995d38512385b055b6900bd6:backend/Modelos/casa.js
});

module.exports=mongoose.model('casa', casaSchema);

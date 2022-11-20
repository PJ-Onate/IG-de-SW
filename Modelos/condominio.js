const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const condominioSchema = new Schema({
    nombreCondominio:{
        type: String,
        require: true
    },
    direccionCondominio:{
        type: String,
        unique: true
    },
    ciudadCondominio:{
        type: String,
        require: true
    },
     casa:{
         type: Schema.ObjectId,
         ref: 'casa'
     }
});

module.exports=mongoose.model('condominio', condominioSchema);

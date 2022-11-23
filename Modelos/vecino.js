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
    telefono:{
        type: Number,
        require: true
    },
    email: {
        type: String,
        unique: true
    }

    /*roles: {
        type: Schema.ObjectId,
        ref: 'Roles'        
    },
    
    gastoComunes:{
        type: Schema.ObjectId,
        ref: 'gastoComun'
    },

    estados:{
        type: Schema.ObjectId,
        ref: 'estados'
    }*/
});

module.exports = mongoose.model('Vecino', vecinoSchema);
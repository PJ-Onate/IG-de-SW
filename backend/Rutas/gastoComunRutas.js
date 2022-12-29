const express = require('express');
const api = express.Router();
const gastoControlador = require('../Controladores/gastoComunControlador');

api.post('/gastoComun', gastoControlador.crearGastoComun);
<<<<<<< HEAD:Rutas/gastoComunRutas.js
api.put('/gastoComun/update/:id', gastoControlador.updateGastoComun);
api.get('/gastoComun', gastoControlador.getGastosComunes);
api.get('/gastoComun/search/:id', gastoControlador.getGastoComunEspecifico);
api.get('/casa/delete/:id', gastoControlador.deleteGastoComun);
=======
api.put('/gastoComun/update/:nombreGastoComun', gastoControlador.updateGastoComun);
api.get('/gastoComunes', gastoControlador.getGastoComun);
api.get('/gastoComunes/search/:nombreGastoComun', gastoControlador.getGastoEspecifico);
>>>>>>> 33af20471e61fd6b995d38512385b055b6900bd6:backend/Rutas/gastoComunRutas.js

module.exports = api;
const express = require('express');
const api = express.Router();
const gastoControlador = require('../Controladores/gastoComunControlador');

api.post('/gastoComun', gastoControlador.crearGastoComun);
api.put('/gastoComun/update/:nombreGastoComun', gastoControlador.updateGastoComun);
api.get('/gastoComunes', gastoControlador.getGastoComun);
api.get('/gastoComunes/search/:nombreGastoComun', gastoControlador.getGastoEspecifico);

module.exports = api;
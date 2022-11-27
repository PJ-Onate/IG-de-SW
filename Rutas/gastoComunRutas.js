const express = require('express');
const api = express.Router();
const gastoControlador = require('../Controladores/gastoComunControlador');

api.post('/gastoComun', gastoControlador.crearGastoComun);
api.put('/gastoComun/update/:id', gastoControlador.updateGastoComun);
api.get('/gastoComun', gastoControlador.getGastosComunes);
api.get('/gastoComun/search/:id', gastoControlador.getGastoComunEspecifico);
api.get('/casa/delete/:id', gastoControlador.deleteGastoComun);

module.exports = api;
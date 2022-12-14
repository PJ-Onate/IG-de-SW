const express = require('express');
const api = express.Router();
const casaControlador = require('../Controladores/casaControlador');

api.post('/casa', casaControlador.crearCasa);

api.put('/casa/update/:id', casaControlador.updateCasa);
api.get('/casa', casaControlador.getCasas);
api.get('/casa/search/:id', casaControlador.getCasaEspecifica);

api.put('/casa/update/:numCasa', casaControlador.updateCasa);
api.get('/casas', casaControlador.getCasas);
api.get('/casas/search/:numCasa', casaControlador.getCasaEspecifica);


module.exports = api;


const express = require('express');
const api = express.Router();
const boletasControlador = require('../Controladores/boletasControlador');

api.post('/boleta', boletasControlador.crearBoleta);
api.put('/boleta/update/:id', boletasControlador.updateBoleta);
api.get('/boleta', boletasControlador.getBoletas);
api.get('/boleta/search/:id', boletasControlador.getBoletaEspecifica);
api.get('/boleta/delete/:id', boletasControlador.deleteBoleta);

module.exports = api;
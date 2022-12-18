const express = require('express');
const api = express.Router();
const boletaControlador = require('../Controladores/boletaControlador');

api.get('/boleta', boletaControlador.crearBoleta);
api.post('/boleta', boletaControlador.crearBoleta);
api.put('/boleta/update/:id', boletaControlador.updateBoleta);
api.delete('/boleta/delete/:id', boletaControlador.deleteBoleta);

module.exports = api;
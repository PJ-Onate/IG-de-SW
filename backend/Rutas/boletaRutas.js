const express = require('express');
const api = express.Router();
const boletaControlador = require('../Controladores/boletaControlador');

api.get('/boleta', boletaControlador.getBoletas);
api.post('/boletas', boletaControlador.crearBoleta);
api.put('/boleta/update/:id', boletaControlador.updateBoleta);
api.delete('/boleta/delete/:id', boletaControlador.deleteBoleta);

api.post('/login', boletaControlador.login);


module.exports = api;
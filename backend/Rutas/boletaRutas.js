const express = require('express');
const api = express.Router();
<<<<<<< HEAD:Rutas/boletaRutas.js
const boletasControlador = require('../Controladores/boletasControlador');

api.post('/boleta', boletasControlador.crearBoleta);
api.put('/boleta/update/:id', boletasControlador.updateBoleta);
api.get('/boleta', boletasControlador.getBoletas);
api.get('/boleta/search/:id', boletasControlador.getBoletaEspecifica);
api.get('/boleta/delete/:id', boletasControlador.deleteBoleta);
=======
const boletaControlador = require('../Controladores/boletaControlador');

api.get('/boleta', boletaControlador.crearBoleta);
api.post('/boleta', boletaControlador.crearBoleta);
api.put('/boleta/update/:id', boletaControlador.updateBoleta);
api.delete('/boleta/delete/:id', boletaControlador.deleteBoleta);
>>>>>>> 33af20471e61fd6b995d38512385b055b6900bd6:backend/Rutas/boletaRutas.js

module.exports = api;
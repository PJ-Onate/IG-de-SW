const express = require('express');
const api = express.Router();

const propiedadControladores = require('../Controladores/propiedadControladores');
//api.get('/estados', estadosControlador.getEstado);
api.post('/propiedadModelo', propiedadControladores.agregarPropiedad);
//api.put('/estados/update/:id', estadosControlador.updateEstado);
module.exports = api;
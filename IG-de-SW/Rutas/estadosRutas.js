const express = require('express');
const api = express.Router();
const estadosControlador = require('../Controladores/estadosControladores');
api.get('/estados', estadosControlador.getEstado);
api.post('/estadoModelo', estadosControlador.crearEstado);
api.put('/estados/update/:descripcion', estadosControlador.updateEstado);
api.delete('/estados/delete/:descripcion', estadosControlador.deleteEstado);
module.exports = api;
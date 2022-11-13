const express = require('express');
const api = express.Router();
const estadoControlador = require('../controladores/estadoControlador');

api.post('/estado', estadoControlador.crearEstado);

module.exports = api;

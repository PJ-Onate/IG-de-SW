const express = require('express');
const api = express.Router();
const gastosTotalesControlador = require('../Controladores/gastosTotalesControlador');

api.post('/gastosTotales', gastosTotalesControlador.crearGastoTotal);

module.exports = api;
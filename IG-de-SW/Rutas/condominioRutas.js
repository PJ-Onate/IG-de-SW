const express = require('express');
const api = express.Router();
const condominioControlador = require('../Controladores/condominioControlador');

api.post('/condominio', condominioControlador.crearCondominio);
api.get('/condominios', condominioControlador.getCondominio);

module.exports = api;
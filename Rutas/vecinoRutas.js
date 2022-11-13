const express = require('express');
const api = express.Router();
const vecinoControlador = require('../controladores/vecinoControlador');

api.post('/vecino', vecinoControlador.crearVecino);


module.exports = api;
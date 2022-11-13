const express = require('express');
const api = express.Router();
const vecinoControlador = require('../controladores/vecinoControlador');

api.post('/vecino', vecinoControlador.crearVecino);
api.put('/vecino/update/:id', vecinoControlador.updateVecino);


module.exports = api;
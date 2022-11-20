const express = require('express');
const api = express.Router();
const vecinoControlador = require('../Controladores/vecinoControlador');

api.post('/vecino', vecinoControlador.crearVecino);
api.put('/vecino/update/:id', vecinoControlador.updateVecino);
api.get('/vecinos', vecinoControlador.getVecinos);
api.delete('/vecino/delete/:id', vecinoControlador.deleteVecino);
api.get('/vecinos/search/:id', vecinoControlador.getVecinoEspecifico);

module.exports = api;
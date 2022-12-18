
const express = require('express');
const api = express.Router();
const vecinoControlador = require('../Controladores/vecinoControlador');

api.post('/vecino', vecinoControlador.crearVecino);
api.put('/vecino/update/:rut', vecinoControlador.updateVecino);
api.get('/vecinos', vecinoControlador.getVecinos);
api.delete('/vecino/delete/:rut', vecinoControlador.deleteVecino);
api.get('/vecinos/search/:rut', vecinoControlador.getVecinoEspecifico);

module.exports = api;
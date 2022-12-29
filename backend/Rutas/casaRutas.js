const express = require('express');
const api = express.Router();
const casaControlador = require('../Controladores/casaControlador');

api.post('/casa', casaControlador.crearCasa);
<<<<<<< HEAD:Rutas/casaRutas.js
api.put('/casa/update/:id', casaControlador.updateCasa);
api.get('/casa', casaControlador.getCasas);
api.get('/casa/search/:id', casaControlador.getCasaEspecifica);
api.get('/casa/delete/:id', CasasControlador.deleteCasa);
=======
api.put('/casa/update/:numCasa', casaControlador.updateCasa);
api.get('/casas', casaControlador.getCasas);
api.get('/casas/search/:numCasa', casaControlador.getCasaEspecifica);
>>>>>>> 33af20471e61fd6b995d38512385b055b6900bd6:backend/Rutas/casaRutas.js

module.exports = api;


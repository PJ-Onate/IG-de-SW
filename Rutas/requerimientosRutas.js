const express = require('express');
const api = express.Router();
const requerimientoPago = require('../Requerimientos/pagoGastoComun');
const emailControlador = require('../Requerimientos/emailControlador');
const ingresarBoleta = require('../Requerimientos/ingresarBoleta');


api.post('/sent-email', emailControlador.email);

api.put('/pagoDeuda', requerimientoPago.pagoDeudaTotal);
api.get('/pagoGasto', requerimientoPago.pagarGasto);
api.get('abonarDeuda', requerimientoPago.abonar);
api.get('/ingresarBoleta', ingresarBoleta.crearBoleta);
api.get('/crearGastoComun', ingresarBoleta.crearGastoComun);

module.exports=api;

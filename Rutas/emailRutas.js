const express = require('express');
const api = express.Router();
const emailControlador = require('../Controladores/emailControlador');

api.post('/sent-email', emailControlador.email);

module.exports = api;
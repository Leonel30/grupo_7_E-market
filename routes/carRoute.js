const express = require('express');
const carController = require('../controllers/carController');

const routeCar = express.Router();

routeCar.get('/', carController.car );

module.exports = routeCar;
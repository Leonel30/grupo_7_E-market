const express = require('express');
const registerController = require('../controllers/registerController');
const routeRegister = express.Router();

routeRegister.get('/',registerController.register )

module.exports =  routeRegister;
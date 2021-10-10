const express = require('express');
const loginController = require('../controllers/loginController');
routeLogin = express.Router();

routeLogin.get('/', loginController.login)

module.exports = routeLogin;
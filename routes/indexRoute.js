const express = require('express');
const indexController = require('../controllers/indexController');

const routeIndex = express.Router();

routeIndex.get('/', indexController.index );

module.exports = routeIndex;
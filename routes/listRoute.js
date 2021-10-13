const express =  require('express');
const listController = require('../controllers/listController');
const routeList = express.Router();

routeList.get('/', listController.index )

module.exports = routeList ;
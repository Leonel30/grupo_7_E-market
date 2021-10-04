const express = require('express');
const productController = require('../controllers/productController');


const routeProduct = express.Router();

routeProduct.get('/', productController.index);

module.exports = routeProduct;
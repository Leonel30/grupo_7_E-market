const path =  require('path');

const productController = {
    index : (req,res)=> {
        res.render('./products/detailProduct');
    }
}

module.exports = productController;
const path =  require('path');

const productController = {
    index : (req,res)=> {
        res.render('detailProduct');
    }
}

module.exports = productController;
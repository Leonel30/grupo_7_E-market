const path =  require('path');

const productController = {
    index : (req,res)=> {
        res.sendFile(path.join(__dirname, '../views/detailProduct.html'));
    }
}

module.exports = productController;
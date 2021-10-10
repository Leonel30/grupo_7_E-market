const path =  require('path');

const indexController = {
    index : (req,res)=> {
        res.render('index');
       /*  res.sendFile(path.join(__dirname, '../views/index.ejs')); */
    }
}

module.exports = indexController;
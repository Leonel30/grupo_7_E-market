const express = require('express');

const routeIndex = require('./routes/indexRoute');
const routeProduct = require('./routes/productRoute');

const app = express();
const PORT = process.env.PORT || 3005;

app.use("/home", routeIndex);

app.use("/product", routeProduct);


app.listen(PORT, () => console.log('servidor corriendo en http://localhost:3005'));

app.use(express.static('public'));

/* app.get('/', (req,res)=> res.sendFile(path.join(__dirname, './views/index.html'))); */
/* app.get('/detail', (req,res)=> res.sendFile(path.join(__dirname, './views/detailProduct.html')));
app.get('/login', (req,res)=> res.sendFile(path.join(__dirname, './views/login.html')));
app.get('/product', (req,res)=> res.sendFile(path.join(__dirname, './views/car2.html'))); */







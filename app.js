const express = require('express');

const routeIndex = require('./routes/indexRoute');
const routeProduct = require('./routes/productRoute');
const routeLogin = require('./routes/loginRoute');
const routeRegister = require('./routes/registerRoute');
const routerCar = require('./routes/carRoute');

const app = express();

// configurando el template engine //

app.set('view engine','ejs');

// defininendo el puerto //
const PORT = process.env.PORT || 3005;

//indicando rutas a usar //

app.use("/home", routeIndex);
app.use("/products", routeProduct);
app.use('/login', routeLogin);
app.use('/register', routeRegister );
app.use('/car', routerCar);

// instanciando el servidor //
app.listen(PORT, () => console.log('servidor corriendo en http://localhost:3005'));

//indicando los archivos publicos //
app.use(express.static('public'));



/* app.get('/', (req,res)=> res.sendFile(path.join(__dirname, './views/index.html'))); */
/* app.get('/detail', (req,res)=> res.sendFile(path.join(__dirname, './views/detailProduct.html')));
app.get('/login', (req,res)=> res.sendFile(path.join(__dirname, './views/login.html')));
app.get('/product', (req,res)=> res.sendFile(path.join(__dirname, './views/car2.html'))); */







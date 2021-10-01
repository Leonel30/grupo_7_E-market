const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3005;

app.listen(PORT, () => console.log('servidor corriendo en el puerto 3005'));

app.get('/', (req,res)=> res.sendFile(path.join(__dirname, './views/index.html')));
app.get('/detail', (req,res)=> res.sendFile(path.join(__dirname, './views/detailProduct.html')));
app.get('/login', (req,res)=> res.sendFile(path.join(__dirname, './views/login.html')));

app.use(express.static('public'));





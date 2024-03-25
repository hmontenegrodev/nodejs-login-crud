const express = require('express');
require('dotenv').config();
const { dbConnection } = require('./database/config');
const cors = require('cors');

//Creacion del server de express
const app = express();

//Conexion a BD
dbConnection();

// CORS
app.use(cors());

//Directorio Publico
app.use(express.static('public'));

//Lectura y parseo del body
app.use(express.json());

//Rutas
app.use('/api/auth', require('./routes/auth'));
app.use('/api/events', require('./routes/events'));

//Escuchar las peticiones
app.listen(process.env.PORT, () => {
    console.log(`server corriendo ${process.env.PORT}`)
})
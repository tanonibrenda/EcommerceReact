// app.js

//requerir y manejar express
const express = require('express');
const app = express();


const session = require('express-session');

//requerir bodyParser
const bodyParser = require('body-parser');
const cors = require('cors');
// Importa la configuración primero
const { appConfig } = require('./config.js');  

require('./conexion.js');  // Luego la conexión a la base de datos
const mongoose = require('mongoose');  // Finalmente, importa mongoose
const debug = require('debug')('backend');
mongoose.set('debug', true);

// Importa las rutas después de la configuración y conexión
const usuariosRoutes = require('./routes/usuarios.js');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/public', express.static(`${__dirname}/storage/imgs`));

app.use(session({
    //propiedades para manejas secretos
    secret: `${appConfig.secret}`,
    resave: false,  
    cookie: {expires: new Date (Date.now()  + 7 * 24 * 60 * 60 * 1000 )},
    saveUninitialized: false,  
}))

// Usar rutas
app.use('/v1', usuariosRoutes);

// Puerto del archivo de configuración
const port = appConfig.port || 3001;
app.listen(port, () => {
    console.log(`Servidor backend escuchando en el puerto ${port}`);
});

console.log('Corre app.js de backend');

module.exports = app;

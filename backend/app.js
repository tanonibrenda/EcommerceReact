// app.js
const express = require('express');
const app = express();
const session = require('express-session');
const bodyParser = require('body-parser');
const cors = require('cors');
const { appConfig } = require('./config.js');
require('./conexion.js');
const mongoose = require('mongoose');
const debug = require('debug')('backend');
mongoose.set('debug', true);
const usuariosRoutes = require('./routes/usuarios.js');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/public', express.static(`${__dirname}/storage/imgs`));

app.use(session({
  secret: `${appConfig.secret}`,
  resave: false,
  cookie: { expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) },
  saveUninitialized: false,
}))

app.use('/v1', usuariosRoutes);

const port = appConfig.port || 3001;
app.listen(port, () => {
  console.log(`Servidor backend escuchando en el puerto ${port}`);
});

console.log('Corre app.js de backend');
module.exports = app;

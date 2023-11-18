const express = require('express');
const bodyParser = require('body-parser');
const { appConfig } = require('./config');
const mongoose = require('./db/mongodb');
const usuariosRoutes = require('./routes/usuarios');
const cors = require('cors');
const { initApp } = require('./server');

const app = express();

mongoose.set('debug', true);
mongoose.connectDb();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

app.use('/v1', usuariosRoutes);

initApp();

const port = appConfig.port ;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

module.exports = app;

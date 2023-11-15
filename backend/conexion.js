// conexion.js
const mongoose = require('mongoose');
const { dbConfig } = require('./config.js');

const { host, port, dbName } = dbConfig;
const dbUrl = `mongodb://${host}:${port}/${dbName}`;

mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('connected', () => {
  console.log("Conectado a la base de datos de MongoDB");
});

db.on('error', (err) => {
  console.error("Error conectando a la base de datos de MongoDB:", err);
});

module.exports = db;
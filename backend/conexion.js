const mongoose = require('mongoose');
const { dbConfig } = require('./config.js');

// Desestructura las variables de configuración
const { host, port, dbName } = dbConfig;

// URL a la conexión
const dbUrl = `mongodb://${host}:${port}/${dbName}`;

// Conexión a la base de datos
mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('connected', () => {
  console.log("Conectado a la base de datos de MongoDB y el archivo conexion.js");
});

db.on('error', (err) => {
  console.error("Error conectando a la base de datos de MongoDB:", err);
});

// Exporta solo la conexión
module.exports = db;

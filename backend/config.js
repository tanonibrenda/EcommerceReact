const config = {
  appConfig: {
    port: process.env.APP_PORT ||3001,
    host: process.env.APP_HOST || 'localhost',
  },
  dbConfig: {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 27017,
    dbName: process.env.DB_NAME || 'proyectoincluyeme',
  },
};

console.log("Configuración:", config);

module.exports = config;

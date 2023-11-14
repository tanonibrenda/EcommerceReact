const mongoose = require('mongoose');
const { dbConfig } = require('./config.js');

const MONGODB_URI = `mongodb://${dbConfig.host}:${dbConfig.port}/${dbConfig.dbName}`;

(async () => {
  try {
    const db = await mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("DB connected to", db.connection.name);
  } catch (error) {
    console.error(error);
  }
})();

module.exports = connectDb;
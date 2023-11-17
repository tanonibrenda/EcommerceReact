// mongodb.js
const mongoose = require('mongoose');
const { dbConfig } = require('../config');

const MONGODB_URI = `mongodb://${dbConfig.host}:${dbConfig.port}/${dbConfig.dbName}`;

const connectDb = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    });
    console.log("DB connected to", dbConfig.dbName);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

console.log('Archivo mongodb.js de db');
module.exports = mongoose;
module.exports.connectDb = connectDb;

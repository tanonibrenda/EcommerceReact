const mongoose = require('mongoose');
const { dbConfig } = require('./config.js');

const MONGODB_URI = `mongodb://${dbConfig.host}:${dbConfig.port}/${dbConfig.dbName}`;

// (async () => {
//   try {
//     const db = await mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
//     console.log("DB connected to", db.connection.name);
//   } catch (error) {
//     console.error(error);
//   }
// })();

const connectDb = async () => {
  try {
    await mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("DB connected to", dbConfig.dbName);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

module.exports = connectDb;
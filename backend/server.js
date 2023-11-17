require('dotenv').config();
const express = require('express');
const { appConfig, dbConfig } = require('./config');
const mongoose = require('./db/mongodb');
const connectDb = mongoose.connectDb;
const cors = require('cors');

const app = express();
app.use(cors());

async function initApp() {
    try {
        await connectDb(dbConfig);
        app.listen(appConfig.port, () => {
            console.log(`Server running on port ${appConfig.port} from server.js`);
        });
    } catch (error) {
        console.error('Error starting the server:', error);
        process.exit(1);
    }
}

// initApp();

module.exports = { initApp };

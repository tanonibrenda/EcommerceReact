const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config();
const cors = require('cors');
const app = express();
const router = require('./routes/crudRoute');

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

// Connect to the database
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected...') 
  })
  .catch(err => {
    console.error(err)
  });

app.get("/", (req, res) =>  {
  res.send("Sí, quédate tranquila, parece que está funcionando... por ahora");
});

app.use("/api", router);

app.listen(PORT, () => console.log(`Backend listening on port ${PORT} from Server.js file`));

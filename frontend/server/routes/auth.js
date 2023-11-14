// routes/auth.js
const express = require('express');
const router = express.Router();

// Manejo de inicio de sesión
router.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Lógica de inicio de sesión aquí...

  if (username === 'usuario1' && password === 'contraseña1') {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

module.exports = router;

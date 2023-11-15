// routes/auth.js
const express = require('express');
const router = express.Router();
const Usuario = require('../models/usuario');  // Asegúrate de importar tu modelo de usuario

// Manejo de inicio de sesión
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Buscar el usuario en la base de datos
    const usuario = await Usuario.findOne({ username, password });

    if (usuario) {
      res.json({ success: true, usuario });
    } else {
      res.json({ success: false, message: 'Credenciales incorrectas' });
    }
  } catch (error) {
    console.error('Error en la autenticación:', error);
    res.status(500).json({ success: false, message: 'Error en el servidor' });
  }
});

module.exports = router;


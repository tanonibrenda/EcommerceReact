const express = require('express');
const router = express.Router();
const LoginController = require('../controllers/LoginController');
const axios = require('axios');

// Obtener todos los usuarios
router.get('/', LoginController.getAllUsers);

// Obtener un usuario por ID
router.get('/:id', LoginController.getUserById);

// Crear un nuevo usuario
router.post('/', async (req, res) => {
  try {
    const userData = req.body; // Obtener datos del cuerpo de la solicitud
    const response = await axios.post('http://localhost:3001/users', userData);
    res.status(response.status).json(response.data);
  } catch (error) {
    console.error("Error al crear usuario:", error);
    res.status(500).send('Error interno del servidor');
  }
});

// Actualizar un usuario por ID
router.put('/:id', LoginController.updateUser);

// Borrar un usuario por ID
router.delete('/:id', LoginController.deleteUser);

module.exports = router;

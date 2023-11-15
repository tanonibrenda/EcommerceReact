//usuarios.js de la carpeta api
const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

// Obtener todos los usuarios
router.get('/', UserController.getAllUsers);

// Obtener un usuario por ID
router.get('/:id', UserController.getUserById);

// Crear un nuevo usuario
router.post('/', UserController.createUser);

// Actualizar un usuario por ID
router.put('/:id', UserController.updateUser);

// Borrar un usuario por ID
router.delete('/:id', UserController.deleteUser);

module.exports = router;


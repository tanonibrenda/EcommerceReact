const express = require('express');
const router = express.Router();
const LoginController = require('../controllers/LoginController');
const { userMiddleware } = require('../../../backend/middlewares/userMiddleware');

// Obtener todos los usuarios
router.get('/', LoginController.getAllUsers);

// Obtener un usuario por ID
router.get('/:idUser', LoginController.getUserById);

// Crear un nuevo usuario
router.post('/', async (req, res) => {
  try {
    const userData = req.body; 
    console.log('Cuerpo de la solicitud:', req.body);
    const responseData = await userMiddleware(userData); 
    res.status(201).json(responseData);
  } catch (error) {
    console.error("Error al crear usuario:", error);
    res.status(500).send('Error interno del servidor');
  }
});

// Actualizar un usuario por ID
router.put('/:idUser', LoginController.updateUser);

// Borrar un usuario por ID
router.delete('/:idUser', LoginController.deleteUser);

module.exports = router;


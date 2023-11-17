const axios = require('axios');

// Función para obtener todos los usuarios
exports.getAllUsers = async (req, res) => {
  try {
    // Lógica para obtener todos los usuarios
    const response = await axios.get('http://localhost:3001/users');
    res.status(response.status).json(response.data);
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
    res.status(500).send('Error interno del servidor');
  }
};

// Función para obtener un usuario por ID
exports.getUserById = async (req, res) => {
  const userId = req.params.id;

  try {
    // Lógica para obtener un usuario por ID
    const response = await axios.get(`http://localhost:3001/users/${userId}`);
    res.status(response.status).json(response.data);
  } catch (error) {
    console.error("Error al obtener usuario por ID:", error);
    res.status(500).send('Error interno del servidor');
  }
};

// Función para actualizar un usuario por ID
exports.updateUser = async (req, res) => {
  const userId = req.params.id;
  const updatedUserData = req.body;

  try {
    // Lógica para actualizar un usuario por ID
    const response = await axios.put(`http://localhost:3001/users/${userId}`, updatedUserData);
    res.status(response.status).json(response.data);
  } catch (error) {
    console.error("Error al actualizar usuario:", error);
    res.status(500).send('Error interno del servidor');
  }
};

// Función para borrar un usuario por ID
exports.deleteUser = async (req, res) => {
  const userId = req.params.id;

  try {
    // Lógica para borrar un usuario por ID
    const response = await axios.delete(`http://localhost:3001/users/${userId}`);
    res.status(response.status).json(response.data);
  } catch (error) {
    console.error("Error al borrar usuario:", error);
    res.status(500).send('Error interno del servidor');
  }
};

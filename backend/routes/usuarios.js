// usuarios.js de Routes de Backend
const express = require('express');
const api = express.Router();
const { CrearUsuario, getUsuarios, findUsuarios, ActUsuario, BorrarUsuarios } = require('../controller/usuariosController');

api.get('/usuarios', getUsuarios);

// Ruta para agregar un usuario
api.post('/usuarios', async (req, res) => {
    try {
      const nuevoUsuario = await CrearUsuario(req.body); 
      res.json(nuevoUsuario);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al agregar el usuario' });
    }
  });

// Obtener un usuario por ID
api.get('/usuarios/:idUser', findUsuarios);

//ruta para actualizar un usuario

api.put('/usuarios/:idUser', async (req, res) => {
  try {
    const usuarioActualizado = await ActUsuario(req, res); // Pasar req y res
    if (!res.headersSent) {
      res.json(usuarioActualizado);
    }
  } catch (error) {
    console.error(error);
    if (!res.headersSent) {
      res.status(500).json({ error: 'Error al actualizar el usuario' });
    }
  }
});


//ruta para borrar usuario
api.delete('/usuarios/:idUser', BorrarUsuarios);

console.log('usuarios.js de routes');
module.exports = api;

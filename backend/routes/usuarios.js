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

api.get('/usuarios/:id', findUsuarios);

// Ruta para actualizar un usuario
api.put('/usuarios/:id', async (req, res) => {
  try {
    const usuarioActualizado = await  ActUsuario(req.params.id, req.body); 
    res.json(usuarioActualizado);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar el usuario' });
  }
});

api.delete('/usuarios/:id', BorrarUsuarios);

console.log('usuarios.js de routes');
module.exports = api;

// usuarios.js de Routes de Backend
const express = require('express');
const api = express.Router();
const upload = require('../libs/storage');
const { addUsuario, getUsuarios, findUsuarios, updateUsuario, deleteUsuarios } = require('../controller/usuariosController');

api.get('/usuarios', getUsuarios);
api.post('/usuarios', upload.single('imagen'), addUsuario);
api.get('/usuarios/:id', findUsuarios);
api.put('/usuarios/:id', upload.single('imagen'), updateUsuario);
api.delete('/usuarios/:id', deleteUsuarios);


console.log('usuarios.js de routes')
module.exports = api;

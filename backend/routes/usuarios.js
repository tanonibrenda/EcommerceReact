const express = require('express');
const api = express.Router();
const upload = require('../libs/storage')


const {addUsuario, getUsuarios, findUsuarios, updateUsuario, deleteUsuarios} = require('../controller/usuariosController');

// 

api.get('/usuario', getUsuarios );
api.post('/usuarios', upload.single('imagen'), addUsuario);
api.get('/usuarios/:id', findUsuarios);
api.put('/usuarios/:id', upload.single('imagen'), updateUsuario);
api.delete('/usuarios/:id', deleteUsuarios);
console.log('Se están cargando las rutas del backend');

module.exports = api;
const Usuario = require('../models/Usuarios');
const { userMiddleware } = require('../middlewares/userMiddleware');

async function CrearUsuario(req, res) {
    try {
        // Validar y crear el usuario usando el middleware
        console.log(req.body);
        userMiddleware(req.body);
        const nuevoUsuario = await Usuario.create(req.body);
        res.status(201).json({ usuario: nuevoUsuario });
    } catch (error) {
        console.error('Error al crear usuario:', error);
        res.status(400).json({ error: 'No se pudo crear el usuario' });
    }
}

async function getUsuarios(req, res) {
    try {
        const usuarios = await Usuario.find();
        res.status(200).send({ usuarios });
    } catch (e) {
        res.status(500).send({ message: e.message });
    }
}

async function findUsuarios(req, res) {
    try {
        const usuario = await Usuario.findById(req.params.id);
        res.status(200).send({ usuario });
    } catch (e) {
        res.status(500).send({ message: e.message });
    }
}

async function ActUsuario(req, res) {
    try {
        const usuarioActualizado = await Usuario.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });
        res.status(200).send({ usuario: usuarioActualizado });
    } catch (e) {
        res.status(500).send({ message: e.message });
    }
}

async function BorrarUsuarios(req, res) {
    try {
        const usuarioEliminado = await Usuario.findByIdAndDelete(req.params.id);
        if (!usuarioEliminado) {
            return res.status(404).send({ message: 'Usuario no encontrado' });
        }
        res.status(200).send({ message: 'Usuario eliminado exitosamente' });
    } catch (e) {
        res.status(500).send({ message: e.message });
    }
}

module.exports = { CrearUsuario, getUsuarios, findUsuarios, ActUsuario, BorrarUsuarios };

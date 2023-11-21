const Usuario = require('../models/Usuarios');
const { userMiddleware } = require('../middlewares/userMiddleware');


async function CrearUsuario(req, res) {
    try {
        const userData = {
            name: req.body.name,
            lastname: req.body.lastname,
            password: req.body.password,
            email: req.body.email,
            direccion: req.body.direccion,
            barrio: req.body.barrio,
            municipio: req.body.municipio,
            provincia: req.body.provincia,
            telefono: req.body.telefono,
        };
        console.log('userData:', userData);
        const nuevoUsuarioData = await userMiddleware(userData);
        console.log('nuevoUsuarioData:', nuevoUsuarioData);

        const nuevoUsuario = await Usuario.create(nuevoUsuarioData);
        res.status(201).json({ usuario: nuevoUsuario });
    } catch (error) {
        console.error('Error al crear usuario:', error);
        res.status(400).json({ error: error.message || 'No se pudo crear el usuario' });
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
        const usuario = await Usuario.findOne({ idUser: req.params.id });
        res.status(200).send({ usuario });
    } catch (e) {
        res.status(500).send({ message: e.message });
    }
}

async function ActUsuario(req, res) {
    try {
        // Verificar si req.params.id está presente y es válido
        if (!req.params.idUser || typeof req.params.idUser !== 'string' || req.params.idUser.trim() === '') {
            return res.status(400).json({ message: 'ID de usuario no válido' });
        }

        const usuario = await Usuario.findOne({ idUser: req.params.id });

        if (!usuario) {
            return res.status(404).json({ msg: 'Usuario no encontrado' });
        }
        console.log('req.body:', req.body);

        const usuarioActualizado = await Usuario.findOneAndUpdate({ idUser: req.params.id }, req.body, { new: true });

        if (!usuarioActualizado) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        return usuarioActualizado;
    } catch (e) {
        console.error('Error en ActUsuario:', e);
        return { error: 'Error del servidor', message: e.message };
    }
}

async function BorrarUsuarios(req, res) {
    try {
        const usuarioEliminado = await Usuario.findOneAndDelete({ idUser: req.params.id });
        if (!usuarioEliminado) {
            return res.status(404).send({ message: 'Usuario no encontrado' });
        }
        res.json({ msg: 'Usuario eliminado correctamente' });
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Error del servidor');
    }
}

module.exports = { CrearUsuario, getUsuarios, findUsuarios, ActUsuario, BorrarUsuarios };

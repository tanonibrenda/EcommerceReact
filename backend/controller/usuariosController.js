const Usuario = require('../models/Usuarios');
const { userMiddleware } = require('../middlewares/userMiddleware');

async function CrearUsuario(req, res) {
    try {
        // Validar y crear el usuario usando el middleware
        const nuevoUsuario = await userMiddleware(req.body);

        // Crear una instancia del modelo Usuario
        const usuario = new Usuario({
            name: nuevoUsuario.name,
            Lastname: nuevoUsuario.Lastname,
            username: nuevoUsuario.username,
            password: nuevoUsuario.password,
            email: nuevoUsuario.email,
            direccion: nuevoUsuario.direccion,
            Barrio: nuevoUsuario.barrio,
            municipio: nuevoUsuario.municipio,
            provincia: nuevoUsuario.provincia,
            telefono: nuevoUsuario.telefono,
            idUser: nuevoUsuario.idUser,
        });

        // Verificar si req.file existe y si tiene una propiedad 'filename'
        if (req.file && req.file.filename) {
            usuario.setImagen(req.file.filename);
        }

        // Guardar el usuario en la base de datos
        const nuevoUsuarioGuardado = await usuario.save();
        res.status(201).send({ usuario: nuevoUsuarioGuardado }); // Enviar el nuevo usuario creado en la respuesta
    } catch (e) {
        console.error("Error al crear usuario:", e.message);
        res.status(500).send({ message: "Error interno del servidor al crear usuario" });
    }
}

async function getUsuarios(req, res) {
    try {
        // Obtener los usuarios de la base de datos
        const usuarios = await Usuario.find();
        // Enviar una respuesta con la lista de usuarios obtenida y un código de estado 200 (OK)
        res.status(200).send({ usuarios });
    } catch (e) {
        // En caso de error, enviar una respuesta con un mensaje de error y un código de estado 500 (Internal Server Error)
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

const Usuario = require('../models/Usuarios');

async function CrearUsuario(req, res) {
    try {
        const { name,Lastname, username, password, email, direccion, barrio, municipio, provincia, telefono, idUser } = req.body;

        const usuario = new Usuario({
            name,
            Lastname,
            username,
            password,
            email,
            direccion,
            Barrio: barrio,
            municipio,
            provincia,
            telefono,
            idUser
        });

        // Verificar si req.file existe y si tiene una propiedad 'filename'
        if (req.file && req.file.filename) {
            const { filename } = req.file;
            usuario.setImagen(filename);
        }

        const nuevoUsuario = await usuario.save();
        res.status(201).send({ usuario: nuevoUsuario }); // Enviar el nuevo usuario creado en la respuesta
    } catch (e) {
        console.error("Error al crear usuario:", e.message);
        res.status(500).send({ message: "Error interno del servidor al crear usuario" });
    }
}
async function getUsuarios(req, res) {
    try{
        //obtener los usuarios de la bdd
        const usuarios = await Usuario.find();
        // Enviar una respuesta con la lista de usuarios obtenida y un código de estado 200 (OK)
        res.status(200).send({usuarios});
    }
    catch (e) {
        // En caso de error, enviar una respuesta con un mensaje de error y un código de estado 500 (Internal Server Error)
        res.status(500).send({message: e.message})
    }
}

async function findUsuarios (req, res){
    try{
    const usuarios = await Usuario.findById(req.params.id)
    res.status(200).send({usuarios})
    }
    catch (e) {
        res.status(500).send({message: e.message})
    }
}

async function ActUsuario(req, res){
    try{
        const usuarios = await Usuario.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })
        res.status(200).send({usuarios})
    }
    catch (e) {
        res.status(500).send({message: e.message})
    }
}

async function BorrarUsuarios(req, res){
    try{
        const usuarios = await Usuario.findByIdAndDelete(req.params.id);
        //si no se encuentra cursos
        if(!usuarios){
            return res.status(404).send({ message: 'Usuario no encontrado' });
        }
        res.status(200).send({message: 'Usuario eliminado exitosamente'});
    }
    catch (e) {
        res.status(500).send({message: e.message})
    }
}

module.exports = {CrearUsuario, getUsuarios, findUsuarios, ActUsuario, BorrarUsuarios};

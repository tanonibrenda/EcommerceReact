// traer usuarios
const Usuario = require('../models/Usuarios');

async function addUsuario(req, res){
    try{
        const {name, Lastname, username, password,  email, direccion, Barrio, municipio, provincia, telefono, idUser } = req.body;

        const usuario = Usuario({
            name, 
            Lastname,
            username,
            password,
            email,
            direccion,
            Barrio,
            municipio,
            provincia,
            telefono,
            idUser
        });
        // para la imagen
        if(req.file){
            const { filename } = req.file;
            usuario.setImagen(filename);
        }

        const usuarios = await usuario.save();
        res.status(201).send({ usuarios })
    }
    catch (e) {
        res.status(500).send({message: e.message})
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

async function updateUsuario(req, res){
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

async function deleteUsuarios(req, res){
    try{
        const usuarios = await Usuario.findByIdAndDelete(req.params.id);
        //si no se encuentra cursos
        if(!curso){
            return res.status(404).send({ message: 'Usuario no encontrado' });
        }
        res.status(200).send({message: 'Usuario eliminado exitosamente'});
    }
    catch (e) {
        res.status(500).send({message: e.message})
    }
}

module.exports = {addUsuario, getUsuarios, findUsuarios, updateUsuario, deleteUsuarios};

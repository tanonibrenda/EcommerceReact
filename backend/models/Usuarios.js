const mongoose = require('mongoose');
const { appConfig } = require('../config');

const usuarioSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        lastname: { type: String, required: true },
        username: { type: String, required: true },
        password: { type: String, required: true },
        email: { type: String, required: true },
        direccion: String,
        Barrio: String,
        municipio: String,
        provincia: String,
        telefono: Number,
        _id: {
            type: String,
            default: () => mongoose.Types.ObjectId().toString(),
        },
    },
    {
        
        
        
    }
);

// usuarioSchema.methods.setImagen = function setImagen(filename) {
//     const { host, port } = appConfig;
//     this.imagen = `${host}:${port}/public/${filename}`;
// }

const Usuario = mongoose.model('Usuario', usuarioSchema); 

module.exports = Usuario;

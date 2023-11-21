const mongoose = require('mongoose');
// const {appConfig} = require('../config');

// function generarID() {
//     let a = Date.now().toString(36);
//     let b = Math.random().toString(36).substring(2);
//     return a + b;
// }


const usuarioSchema = new mongoose.Schema(
    {
        idUser: {
            type: String,
            default: () => mongoose.Types.ObjectId().toString(),
            unique: true,
            required: true,
        },
        name:  String, 
        lastname:  String, 
        // username:  tring, 
        password:  String,
        email: String,
        direccion: String,
        Barrio: String,
        municipio: String,
        provincia: String,
        telefono: String,
        
    }
    
);



const Usuario = mongoose.model('Usuario', usuarioSchema); 

module.exports = Usuario;

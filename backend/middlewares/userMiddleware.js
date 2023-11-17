// userMiddleware.js
const { Usuario } = require('../models/Usuarios');

const userMiddleware = async (userData) => {
  try {
    // Asegúrate de que 'userData' no sea 'undefined' ni 'null'
    //  if (!userData.username || !userData.email) {
    //   throw new Error('El nombre de usuario y el correo electrónico son obligatorios.');
    // }

    // Asegúrate de que 'userData.username' y 'userData.email' estén presentes
    if (!userData.username || !userData.email) {
      throw new Error('El nombre de usuario y el correo electrónico son obligatorios.');
    }

    if (userData.password.length < 4) {
      throw new Error('La contraseña debe tener al menos 4 caracteres.');
    }

    // Crear una instancia del modelo Usuario
    const nuevoUsuario = new Usuario({
      name: userData.name,
      Lastname: userData.Lastname,
      username: userData.username,
      password: userData.password,
      email: userData.email,
      direccion: userData.direccion,
      Barrio: userData.barrio,
      municipio: userData.municipio,
      provincia: userData.provincia,
      telefono: userData.telefono,
      idUser: userData.idUser,
    });

    // Verificar si userData tiene una propiedad 'imagen'
    // if (userData.imagen) {
    //   nuevoUsuario.setImagen(userData.imagen);
    // }

    // Guardar el usuario en la base de datos
    await nuevoUsuario.save();

    return nuevoUsuario;
  } catch (error) {
    console.error('Error en el middleware:', error);
    throw error;
  }
};

module.exports = { userMiddleware };

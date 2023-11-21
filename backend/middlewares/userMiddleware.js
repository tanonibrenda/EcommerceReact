const { Usuario } = require('../models/Usuarios');

const userMiddleware = async (userData) => {
  try {
    // Verifica que al menos uno de los campos (username, email, password) esté presente
    if (!userData.email && !userData.password) {
      throw new Error("Debes proporcionar al menos uno de los campos obligatorios: username, email, password");
    }

    if (userData.password.length < 4) {
      throw new Error('La contraseña debe tener al menos 4 caracteres.');
    }

    const nuevoUsuario = new Usuario({
      nombre: userData.name,
      apellido: userData.lastname,
      password: userData.password,
      email: userData.email,
      direccion: userData.direccion,
      Barrio: userData.barrio,
      municipio: userData.municipio,
      provincia: userData.provincia,
      telefono: userData.telefono,
    });

    // Guardar el usuario en la base de datos y devolverlo
    const savedUser = await nuevoUsuario.save();
    return savedUser;
  } catch (error) {
    console.error('Error en el middleware:', error);
    throw error;
  }
};

module.exports = { userMiddleware };

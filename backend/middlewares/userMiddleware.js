const { Usuario } = require('../models/Usuarios');

const userMiddleware = async (userData) => {
  try {
    if (!userData || !userData.username || !userData.email || !userData.password) {
      throw new Error('El nombre de usuario, el correo electrónico y la contraseña son obligatorios.');
    }

    if (userData.password.length < 4) {
      throw new Error('La contraseña debe tener al menos 4 caracteres.');
    }

    console.log(req.body);
    const nuevoUsuario = new Usuario({
      name: userData.name,
      lastname: userData.lastname,
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

    

    // Guardar el usuario en la base de datos y devolverlo
    const savedUser = await nuevoUsuario.save();
    return savedUser;
  } catch (error) {
    console.error('Error en el middleware:', error);
    throw error;
  }
};

module.exports = { userMiddleware };

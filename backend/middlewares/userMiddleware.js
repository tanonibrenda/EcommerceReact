// userMiddleware.js

// import axios from 'axios';
const express = require('express');
const axios = require('axios');
const router = express.Router();


const userMiddleware = async (userData) => {
  try {
    if (!userData.username || !userData.email) {
        throw new Error('El nombre de usuario y el correo electrónico son obligatorios.');
      }
  
      if (userData.password.length < 4) {
        throw new Error('La contraseña debe tener al menos 4 caracteres.');
      }

    // Luego, realizar la solicitud a la API
    const response = await axios.post('http://api.example.com/users', userData);

   

    return response.data;
  } catch (error) {
    console.error('Error en el middleware:', error);
    throw error;
  }
};

export default userMiddleware;

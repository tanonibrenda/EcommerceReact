const express = require('express');
const rateLimit = require('express-limit');
const fs = require('fs');

const app = express();
app.use(express.json());

// Aplicar limitación de velocidad
app.use(rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100, // Permitir un máximo de 100 solicitudes por ventana
}));

const userFilePath = 'ruta/del/archivo/userData.json';

app.post('/api/users', (req, res) => {
  try {
    const users = JSON.parse(fs.readFileSync(userFilePath, 'utf8'));

    // Generar un nuevo ID basado en el recuento actual de usuarios
    const newUserId = `UsN-${users.length + 1}`;

    // Crear un nuevo usuario
    const newUser = {
      idUser: newUserId,
      ...req.body,
    };

    // Agregar el nuevo usuario al arreglo
    users.push(newUser);

    // Guardar la información en el archivo
    fs.writeFileSync(userFilePath, JSON.stringify(users, null, 2));

    // Realizar acciones adicionales si es necesario
    console.log('Nuevo usuario creado:', newUser);

    // Enviar una respuesta al cliente
    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error al crear usuario:', error);
    res.status(500).send('Error interno del servidor');
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});

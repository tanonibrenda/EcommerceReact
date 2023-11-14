// const express = require('express');
// const path = require('path')
// const app = express();
// const PORT = process.env.PORT || 5000;

//  // Middleware para parsear JSON en las solicitudes
// app.use(express.json());


// // Configurar middleware para servir archivos estáticos desde la carpeta 'src' de React
// app.use(express.static(path.join(__dirname, '../public')));


// // Importar rutas
// const authRoutes = require('./routes/auth');

// // Configurar una ruta para el formulario
// app.get('/login', (req, res) => {
//     res.sendFile(path.join(__dirname, '../public', 'index.html'));
//   });

// // Usar las rutas
// app.use('/api/auth', authRoutes);

// app.listen(PORT, () => {
//   console.log(`Servidor backend escuchando en el puerto ${PORT}`);
// });

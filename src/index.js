import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import juegoRoutes from './routes/juegoRoutes.js';
import usuarioRoutes from './routes/usuarioRoutes.js';

// Cargar variables de entorno desde el archivo .env
dotenv.config();

// Conectar a la base de datos de MongoDB
connectDB();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json()); // Para poder leer req.body en formato JSON

// Servir imágenes estáticas para las portadas de los juegos
app.use('/images', express.static('public/images'));

// Ruta raíz informativa
app.get('/', (req, res) => {
  res.json({
    message: 'Servidor base listo y corriendo',
    status: 'Online'
  });
});

// Registrar rutas del sistema
app.use('/api/juegos', juegoRoutes);
app.use('/api/usuarios', usuarioRoutes);

// Middleware para capturar rutas no existentes (404)
app.use((req, res, next) => {
  const error = new Error(`Ruta no encontrada - ${req.originalUrl}`);
  res.status(404);
  next(error);
});

// Middleware de manejo de errores global
app.use((err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode).json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
});

// Configurar puerto
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor de desarrollo iniciado exitosamente en http://localhost:${PORT}`);
});

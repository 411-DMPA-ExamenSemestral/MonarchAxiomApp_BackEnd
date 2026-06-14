import express from 'express';
import { getUsuarios, getUsuarioById, registrarUsuario, loginUsuario } from '../controllers/usuarioController.js';

const router = express.Router();

router.get('/', getUsuarios);
router.get('/:id', getUsuarioById);
router.post('/registro', registrarUsuario); 
router.post('/login', loginUsuario);     

export default router;
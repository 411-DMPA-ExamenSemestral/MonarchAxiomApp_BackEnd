import express from 'express';
import { 
  getUsuarios, 
  getUsuarioById, 
  registrarUsuario, 
  loginUsuario, 
  actualizarUsuario
} from '../controllers/usuarioController.js';

const router = express.Router();

router.get('/', getUsuarios);
router.get('/:id', getUsuarioById);
router.post('/registro', registrarUsuario); 
router.post('/login', loginUsuario);      
router.put('/:id', actualizarUsuario);

export default router;
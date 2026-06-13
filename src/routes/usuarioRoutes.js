import express from 'express';
import { getUsuarios, getUsuarioById } from '../controllers/usuarioController.js';

const router = express.Router();

router.get('/', getUsuarios);
router.get('/:id', getUsuarioById);

export default router;
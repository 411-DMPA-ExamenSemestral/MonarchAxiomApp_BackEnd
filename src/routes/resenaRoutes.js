import express from 'express';
import { getResenas, getResenaById, getResenasByJuego } from '../controllers/resenaController.js';

const router = express.Router();

router.get('/', getResenas);
router.get('/:id', getResenaById);
router.get('/juego/:idJuego', getResenasByJuego);

export default router;
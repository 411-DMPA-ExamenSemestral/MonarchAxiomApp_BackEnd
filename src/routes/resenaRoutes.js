import express from 'express';
import { getResenas, getResenaById, getResenasByJuego, crearResena } from '../controllers/resenaController.js';

const router = express.Router();

router.get('/', getResenas);
router.get('/:id', getResenaById);
router.get('/juego/:idJuego', getResenasByJuego);
router.post('/', crearResena);

export default router;
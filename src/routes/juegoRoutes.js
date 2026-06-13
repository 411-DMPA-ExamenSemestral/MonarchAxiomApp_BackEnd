import express from 'express';
import { getJuegos, getJuegoById } from '../controllers/juegoController.js';

const router = express.Router();

router.get('/', getJuegos);
router.get('/:id', getJuegoById);

export default router;

//si
import Resena from '../models/Resena.js';

export const getResenas = async (req, res) => {
  try {
    const resenas = await Resena.find({});
    res.json(resenas);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las reseñas', error: error.message });
  }
};

export const getResenaById = async (req, res) => {
  try {
    const idNumero = Number(req.params.id);
    if (isNaN(idNumero)) {
      return res.status(400).json({ message: 'El ID debe ser un número válido' });
    }

    const resena = await Resena.findById(idNumero);
    if (!resena) {
      return res.status(404).json({ message: 'Reseña no encontrada' });
    }
    res.json(resena);
  } catch (error) {
    res.status(500).json({ message: 'Error al buscar la reseña', error: error.message });
  }
};

export const getResenasByJuego = async (req, res) => {
  try {
    const idJuego = Number(req.params.idJuego);
    if (isNaN(idJuego)) {
      return res.status(400).json({ message: 'El ID del juego debe ser un número válido' });
    }

    const resenas = await Resena.find({ idJuego: idJuego });
    res.json(resenas);
  } catch (error) {
    res.status(500).json({ message: 'Error al buscar las reseñas de este juego', error: error.message });
  }
};
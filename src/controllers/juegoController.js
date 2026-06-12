import Juego from '../models/Juego.js';

// @desc    Obtener todos los juegos
// @route   GET /api/juegos
// @access  Public
export const getJuegos = async (req, res) => {
  try {
    const juegos = await Juego.find({});
    res.json(juegos);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los juegos de la base de datos', error: error.message });
  }
};

// @desc    Obtener un juego por su ID numérico
// @route   GET /api/juegos/:id
// @access  Public
export const getJuegoById = async (req, res) => {
  try {
    // Convertimos req.params.id a número ya que en tu base de datos el _id es de tipo Number (1, 2, 3...)
    const idNumero = Number(req.params.id);
    if (isNaN(idNumero)) {
      return res.status(400).json({ message: 'El ID proporcionado debe ser un número válido' });
    }

    const juego = await Juego.findById(idNumero);
    if (!juego) {
      return res.status(404).json({ message: 'Videojuego no encontrado en la base de datos' });
    }
    res.json(juego);
  } catch (error) {
    res.status(500).json({ message: 'Error al buscar el videojuego', error: error.message });
  }
};

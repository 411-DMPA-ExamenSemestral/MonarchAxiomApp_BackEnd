import Usuario from '../models/Usuario.js';

export const getUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.find({});
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los usuarios de la base de datos', error: error.message });
  }
};

export const getUsuarioById = async (req, res) => {
  try {
    const idNumero = Number(req.params.id);
    if (isNaN(idNumero)) {
      return res.status(400).json({ message: 'El ID proporcionado debe ser un número válido' });
    }

    const usuario = await Usuario.findById(idNumero);
    if (!usuario) {
      return res.status(404).json({ message: 'Usuario no encontrado en la base de datos' });
    }
    res.json(usuario);
  } catch (error) {
    res.status(500).json({ message: 'Error al buscar el usuario', error: error.message });
  }
};
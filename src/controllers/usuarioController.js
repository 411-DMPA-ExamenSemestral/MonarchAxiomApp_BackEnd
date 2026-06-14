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

export const registrarUsuario = async (req, res) => {
  try {
    const usuarioExistente = await Usuario.findOne({ correo: req.body.correo });
    if (usuarioExistente) {
      return res.status(400).json({ message: 'El correo ya está registrado' });
    }

    const ultimoUsuario = await Usuario.findOne().sort({ _id: -1 });
    const nuevoId = ultimoUsuario ? ultimoUsuario._id + 1 : 1;

    const nuevoUsuario = new Usuario({
      _id: nuevoId,
      ...req.body 
    });

    const usuarioGuardado = await nuevoUsuario.save();
    res.status(201).json(usuarioGuardado);
  } catch (error) {
    res.status(500).json({ message: 'Error al registrar usuario', error: error.message });
  }
};

export const loginUsuario = async (req, res) => {
  try {
    const { correo, password } = req.body;
    
    const usuario = await Usuario.findOne({ correo, password });
    if (!usuario) {
      return res.status(401).json({ message: 'Correo o contraseña incorrectos' });
    }

    res.json({ message: 'Login exitoso', usuario });
  } catch (error) {
    res.status(500).json({ message: 'Error en el servidor al intentar iniciar sesión', error: error.message });
  }
};
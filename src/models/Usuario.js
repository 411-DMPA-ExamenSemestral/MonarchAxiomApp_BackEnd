import mongoose from 'mongoose';

const usuarioSchema = new mongoose.Schema(
  {
    _id: {
      type: Number,
      required: true,
    },
    nombreUsuario: {
      type: String,
      required: [true, 'El nombre de usuario es obligatorio'],
      trim: true,
    },
    correo: {
      type: String,
      required: [true, 'El correo electrónico es obligatorio'],
      trim: true,
      match: [/.+\@.+\..+/, 'Por favor ingresa un correo válido'],
    },
    urlFotoPerfil: {
      type: String,
      required: [true, 'La URL de la foto de perfil es obligatoria'],
    },
    biografia: {
      type: String,
      default: '',
    },
    fechaRegistro: {
      type: Date,
      required: true,
    },
    generosFavoritos: {
      type: [String],
      default: [],
    },
    estadisticas: {
      totalResenas: { type: Number, default: 0 },
      promedioPuntuacionOtorgada: { type: Number, default: 0 },
      resenasEsteMes: { type: Number, default: 0 }
    },
    idsJuegosFavoritos: {
      type: [Number],
      default: [],
    }
  },
  {
    collection: 'Usuarios',
    versionKey: false,
  }
);

const Usuario = mongoose.model('Usuario', usuarioSchema);

export default Usuario;
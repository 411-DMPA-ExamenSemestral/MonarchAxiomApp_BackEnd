import mongoose from 'mongoose';

const usuarioSchema = new mongoose.Schema(
  {
    _id: { type: Number, required: true },
    nombre: { type: String, required: true, trim: true },       
    apellido: { type: String, required: true, trim: true },     
    telefono: { type: String, required: true, trim: true },     
    password: { type: String, required: true },                 
    nombreUsuario: { type: String, required: true, trim: true },
    correo: { 
      type: String, 
      required: true, 
      trim: true,
      match: [/.+\@.+\..+/, 'Por favor ingresa un correo válido'] 
    },
    urlFotoPerfil: { 
      type: String, 
      default: 'https://cdn-icons-png.flaticon.com/512/149/149071.png'
    },
    biografia: { type: String, default: '' },
    fechaRegistro: { type: Date, default: Date.now },
    generosFavoritos: { type: [String], default: [] },
    estadisticas: {
      totalResenas: { type: Number, default: 0 },
      promedioPuntuacionOtorgada: { type: Number, default: 0 },
      resenasEsteMes: { type: Number, default: 0 }
    },
    idsJuegosFavoritos: { type: [Number], default: [] }
  },
  { collection: 'Usuarios', versionKey: false }
);

export default mongoose.model('Usuario', usuarioSchema);
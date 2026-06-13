import mongoose from 'mongoose';

const resenaSchema = new mongoose.Schema(
  {
    _id: {
      type: Number,
      required: true,
    },
    idUsuario: {
      type: Number,
      required: true,
      ref: 'Usuario'
    },
    idJuego: {
      type: Number,
      required: true,
      ref: 'Juego'
    },
    titulo: {
      type: String,
      required: true,
      trim: true,
    },
    texto: {
      type: String,
      required: true,
      trim: true,
    },
    calificacion: {
      type: Number,
      required: true,
      min: 0,
      max: 10
    },
    recomienda: {
      type: Boolean,
      required: true,
    },
    fechaCreacion: {
      type: Date,
      required: true,
      default: Date.now
    },
    votosUtiles: {
      type: Number,
      default: 0,
    }
  },
  {
    collection: 'Resenas',
    versionKey: false,
  }
);

const Resena = mongoose.model('Resena', resenaSchema);

export default Resena;
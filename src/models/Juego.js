import mongoose from 'mongoose';

const juegoSchema = new mongoose.Schema(
  {
    _id: {
      type: Number, // Especificamos que el ID es de tipo numérico para coincidir con tu base de datos (1, 2, 3...)
      required: true,
    },
    nombre: {
      type: String,
      required: [true, 'El nombre es obligatorio'],
      trim: true,
    },
    fechaLanzamiento: {
      type: String,
      required: [true, 'La fecha de lanzamiento es obligatoria'],
    },
    descripcion: {
      type: String,
      required: [true, 'La descripción es obligatoria'],
    },
    calificacionGeneral: {
      type: Number,
      required: [true, 'La calificación general es obligatoria'],
    },
    genero: {
      type: String,
      required: [true, 'El género es obligatorio'],
    },
    disponibilidad: {
      type: String,
      required: [true, 'La disponibilidad es obligatoria'],
    },
    imagen: {
      type: String,
      required: [true, 'El nombre del archivo de imagen es obligatorio'],
    }
  },
  {
    collection: 'Juegos', // Mapear directamente a tu colección "Juegos" en MongoDB Atlas
    versionKey: false,   // Evitar el campo __v en las respuestas de Mongoose
  }
);

const Juego = mongoose.model('Juego', juegoSchema);

export default Juego;

import mongoose from "mongoose";
import autopopulate from "mongoose-autopopulate";

const bookSchema = new mongoose.Schema({
  id: { type: String },
  titulo: { 
    type: String, 
    required: [true, "Titulo is required"],
    validate: {
      validator: value => /^.{3,40}$/.test(value),
      message: "Titulo must have between 3 and 40 characters"
    }
  },
  editora: {
    type: String,
    required: [true, "Editora is required"],
    validate: {
      validator: value => /^.{3,40}$/.test(value),
      message: "Editora must have between 3 and 40 characters"
    }
  },
  preco: {
    type: Number,
    min: [1, "Preço min: 1"],
    max: [5000, "Preço max: 5000"]
  },
  paginas: {
    type: Number, 
    min: [1, "Paginas min: 10"], 
    max: [5000, "Paginas max: 5000"]
  },
  autor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "autores",
    required: [true, "Autor is required"],
    validate: {
      validator: value => /^.{3,40}$/.test(value),
      message: "Autor must have between 3 and 40 characters"
    },
    autopopulate: { select: "nome" }
  }
}, { versionKey: false });

bookSchema.plugin(autopopulate);
const bookModel = mongoose.model("livros", bookSchema);

export default bookModel;
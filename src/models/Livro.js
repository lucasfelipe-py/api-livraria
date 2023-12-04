import mongoose from "mongoose";
import { autorSchema } from "./Autor.js";

const bookSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  titulo: { type: String, required: [true, "Titulo is required"] },
  editora: { type: String },
  preco: { type: Number },
  paginas: { type: Number },
  autor: autorSchema
}, { versionKey: false });

const bookModel = mongoose.model("livros", bookSchema);

export default bookModel;
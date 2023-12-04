import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  titulo: { type: String, required: [true, "Titulo is required"] },
  editora: { type: String },
  preco: { type: Number },
  paginas: { type: Number },
  autor: { type: mongoose.Schema.Types.ObjectId, ref: "autores", required: [true, "Autor is required"] }
}, { versionKey: false });

const bookModel = mongoose.model("livros", bookSchema);

export default bookModel;
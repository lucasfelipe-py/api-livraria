import mongoose from "mongoose";

const autorSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  nome: {
    type: String, 
    required: [true, "Nome is required"]
  },
  nacionalidade: {
    type: String,
    validate: {
      validator: value => /^.{4,16}$/.test(value),
      message: "Nacionalidade must have between 4 and 16 characters"
    }
  }
}, { versionKey: false });

const autores = mongoose.model("autores", autorSchema);

export default autores;
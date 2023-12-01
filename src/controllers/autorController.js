import mongoose from "mongoose";
import { autor } from "../models/Autor.js";

class AutorController {

  static async authorsList(req, res) {
    try{
      const authorsList = await autor.find({});
      res.status(200).json(authorsList);
    } catch (err) {
      res.status(500).json({ message: `${err.message} - Falha na requisição` });
    }
  }

  static async findAuthorById(req, res) {
    try {
      const id = req.params.id;
      const authorFound = await autor.findById(id);

      if (authorFound !== null) { 
        res.status(200).json(authorFound); 
      } 
      else { 
        res.status(404).json({ message: "Autor não encontrado" }); 
      }
    } catch (err) {
      if (err instanceof mongoose.Error.CastError) {
        res.status(400).json({ message: "Parâmetro em formato incorreto" });
      } else {
        res.status(400).json({ message: "Erro interno do servidor" });
      }
    }
  }

  static async registerAuthor(req, res) {
    try {
      const newAuthor = await autor.create(req.body);
      res.status(201).json({
        message: "Livro criado com sucesso",
        livro: newAuthor
      });
    } catch (err) {
      res.status(500).json({ message: `${err.message} - Falha ao cadastrar livro` });
    }
  }

  static async updateAuthorById(req, res) {
    try {
      const id = req.params.id;
      await autor.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "Livro atualizado" });
    } catch (err) {
      res.status(500).json({ message: `${err.message} - Falha na requisição do livro` });
    }
  }

  static async deleteAuthorById(req, res) {
    try {
      const id = req.params.id;
      await autor.findByIdAndDelete(id);
      res.status(200).json({ message: "Livro deletado" });
    } catch (err) {
      res.status(500).json({ message: `${err.message} - Falha ao deletar` });
    }
  }
}

export default AutorController;
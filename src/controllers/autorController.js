import { autor } from "../models/Autor.js";

class AutorController {

  static async authorsList(req, res, next) {
    try{
      const authorsList = await autor.find({});
      res.status(200).json(authorsList);
    } catch (err) {
      next(err);
    }
  }

  static async findAuthorById(req, res, next) {
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
      next(err);
    }
  }

  static async registerAuthor(req, res, next) {
    try {
      const newAuthor = await autor.create(req.body);
      res.status(201).json({
        message: "Autor criado com sucesso",
        autor: newAuthor
      });
    } catch (err) {
      next(err);
    }
  }

  static async updateAuthorById(req, res, next) {
    try {
      const id = req.params.id;
      await autor.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "Autor atualizado" });
    } catch (err) {
      next(err);
    }
  }

  static async deleteAuthorById(req, res, next) {
    try {
      const id = req.params.id;
      await autor.findByIdAndDelete(id);
      res.status(200).json({ message: "Autor deletado" });
    } catch (err) {
      next(err);
    }
  }
}

export default AutorController;
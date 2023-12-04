import NotFound from "../errors/NotFound.js";
import autores from "../models/Autor.js";

class AutorController {

  static async authorsList(req, res, next) {
    try{
      const authorsList = await autores.find();
      res.status(200).json(authorsList);
    } catch (err) {
      next(err);
    }
  }

  static async findAuthorById(req, res, next) {
    try {
      const id = req.params.id;
      const authorFound = await autores.findById(id);

      if (authorFound !== null) { 
        res.status(200).json(authorFound); 
      } 
      else { 
        next(new NotFound("Autor não encontrado")); 
      }
    } catch (err) {
      next(err);
    }
  }

  static async registerAuthor(req, res, next) {
    try {
      let author = new autores(req.body);
      const newAuthor = await author.save();
      
      res.status(201).send(newAuthor.toJSON());
    } catch (err) {
      next(err);
    }
  }

  static async updateAuthorById(req, res, next) {
    try {
      const id = req.params.id;
      const author = await autores.findByIdAndUpdate(id, {$set: req.body});

      if(author !== null) {
        res.status(200).json({ message: "Autor atualizado" });
      } else {
        next(new NotFound("Autor não encontrado"));
      }
    } catch (err) {
      next(err);
    }
  }

  static async deleteAuthorById(req, res, next) {
    try {
      const id = req.params.id;
      const author = await autores.findByIdAndDelete(id);

      if(author !== null) {
        res.status(200).json({ message: "Autor deletado" });
      } else {
        next(new NotFound("Autor não encontrado"));
      }
    } catch (err) {
      next(err);
    }
  }
}

export default AutorController;
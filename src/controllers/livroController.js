import bookModel from "../models/Livro.js";
import autores from "../models/Autor.js";
import NotFound from "../errors/NotFound.js";

class LivroController {
  static async booksList(req, res, next) {
    try{
      const booksList = bookModel.find();
      req.result = booksList;
      next();
    } catch (err) {
      next(err);
    }
  }

  static async findBookById(req, res, next) {
    try {
      const id = req.params.id;
      const bookFound = await bookModel.findById(id);

      if (bookFound !== null) {
        res.status(200).json(bookFound);
      } else {
        next(new NotFound("Livro não encontrado"));
      }
    } catch (err) {
      next(err);
    }
  }

  static async registerBook(req, res, next) {
    const newBook = req.body;
    try {
      const foundAuthor = await autores.findById(newBook.autor);
      const infoBookComplete = {
        ...newBook, 
        autor: { ...foundAuthor._doc } 
      };
      const createdBook = await bookModel.create(infoBookComplete);
      res.status(201).json({
        message: "Livro criado com sucesso",
        livro: createdBook
      });
    } catch (err) {
      next(err);
    }
  }

  static async updateBookById(req, res, next) {
    try {
      const id = req.params.id;
      const bookFound = await bookModel.findByIdAndUpdate(id, req.body);

      if (bookFound !== null) {
        res.status(200).json({ message: "Livro atualizado" });
      } else {
        next(new NotFound("Livro não encontrado"));
      }
    } catch (err) {
      next(err);
    }
  }

  static async deleteBookById(req, res, next) {
    try {
      const id = req.params.id;
      const bookFound = await bookModel.findByIdAndDelete(id);

      if (bookFound !== null) {
        res.status(200).json({ message: "Livro deletado" });
      } else {
        next(new NotFound("Livro não encontrado"));
      }
    } catch (err) {
      next(err);
    }
  }

  static async listBooksByFilter(req, res, next) {
    try {
      const { editora, titulo, maxPaginas, minPaginas, autor } = req.query;

      const search = {};

      if (editora) search.editora = {$regex: editora, $options: "i"};
      if (titulo) search.titulo = { $regex: titulo, $options: "i" };
      if (maxPaginas) search.paginas = { $lte: maxPaginas };
      if (minPaginas) search.paginas = { $gte: minPaginas };

      if (autor) {
        const author = await autores.findOne({ nome: autor });
        
        if (author !== null) {
          search.autor = author._id;
        } else {
          res.status(200).json([]);
        }
      }

      const booksByFilter = bookModel.find(search);
      req.result = booksByFilter;
      next();
    } catch (err) {
      next(err);
    }
  }
}

export default LivroController;
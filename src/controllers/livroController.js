import bookModel from "../models/Livro.js";
import { autor } from "../models/Autor.js";

class LivroController {

  static async booksList(req, res, next) {
    try{
      const booksList = await bookModel.find({});
      res.status(200).json(booksList);
    } catch (err) {
      next(err);
    }
  }

  static async findBookById(req, res, next) {
    try {
      const id = req.params.id;
      const bookFound = await bookModel.findById(id);
      res.status(200).json(bookFound);
    } catch (err) {
      next(err);
    }
  }

  static async registerBook(req, res, next) {
    const newBook = req.body;
    try {
      const foundAuthor = await autor.findById(newBook.autor);
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
      await bookModel.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "Livro atualizado" });
    } catch (err) {
      next(err);
    }
  }

  static async deleteBookById(req, res, next) {
    try {
      const id = req.params.id;
      await bookModel.findByIdAndDelete(id);
      res.status(200).json({ message: "Livro deletado" });
    } catch (err) {
      next(err);
    }
  }

  static async listBooksByPublisher(req, res, next) {
    const publisher = req.query.editora;
    try {
      const booksByPublisher = await bookModel.find({ editora: publisher });
      res.status(200).json(booksByPublisher);
    } catch (err) {
      next(err);
    }
  }
}

export default LivroController;
import bookModel from "../models/Livro.js";
import { autor } from "../models/Autor.js";

class LivroController {

  static async booksList(req, res) {
    try{
      const booksList = await bookModel.find({});
      res.status(200).json(booksList);
    } catch (err) {
      res.status(500).json({ message: `${err.message} - Falha na requisição` });
    }
  }

  static async findBookById(req, res) {
    try {
      const id = req.params.id;
      const bookFound = await bookModel.findById(id);
      res.status(200).json(bookFound);
    } catch (err) {
      res.status(500).json({ message: `${err.message} - Falha na requisição do livro` });
    }
  }

  static async registerBook(req, res) {
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
      res.status(500).json({ message: `${err.message} - Falha ao cadastrar livro` });
    }
  }

  static async updateBookById(req, res) {
    try {
      const id = req.params.id;
      await bookModel.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "Livro atualizado" });
    } catch (err) {
      res.status(500).json({ message: `${err.message} - Falha na requisição do livro` });
    }
  }

  static async deleteBookById(req, res) {
    try {
      const id = req.params.id;
      await bookModel.findByIdAndDelete(id);
      res.status(200).json({ message: "Livro deletado" });
    } catch (err) {
      res.status(500).json({ message: `${err.message} - Falha ao deletar` });
    }
  }

  static async listBooksByPublisher(req, res) {
    const publisher = req.query.editora;
    try {
      const booksByPublisher = await bookModel.find({ editora: publisher });
      res.status(200).json(booksByPublisher);
    } catch (err) {
      res.status(500).json({ message: `${err.message} - Falha na requisição` });
    }
  }
}

export default LivroController;
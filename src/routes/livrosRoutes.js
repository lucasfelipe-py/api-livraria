import express from "express";
import LivroController from "../controllers/livroController.js";

const router = express.Router();

router
  .get("/livros", LivroController.booksList)
  .get("/livros/busca", LivroController.listBooksByFilter)
  .get("/livros/:id", LivroController.findBookById)
  .post("/livros", LivroController.registerBook)
  .put("/livros/:id", LivroController.updateBookById)
  .delete("/livros/:id", LivroController.deleteBookById);
export default router;
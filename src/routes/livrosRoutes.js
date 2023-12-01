import express from "express";
import LivroController from "../controllers/livroController.js";

const routes = express.Router();

// Get routes
routes.get("/livros", LivroController.booksList);
routes.get("/livros/busca", LivroController.listBooksByPublisher);
routes.get("/livros/:id", LivroController.findBookById);
// Post routes
routes.post("/livros", LivroController.registerBook);
// Put routes
routes.put("/livros/:id", LivroController.updateBookById);
// Delete routes
routes.delete("/livros/:id", LivroController.deleteBookById);

export default routes;
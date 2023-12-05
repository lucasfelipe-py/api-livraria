import express from "express";
import AutorController from "../controllers/autorController.js";
import paginate from "../middlewares/paginate.js";

const router = express.Router();

router
  .get("/autores", AutorController.authorsList, paginate)
  .get("/autores/:id", AutorController.findAuthorById)
  .post("/autores", AutorController.registerAuthor)
  .put("/autores/:id", AutorController.updateAuthorById)
  .delete("/autores/:id", AutorController.deleteAuthorById);
export default router;
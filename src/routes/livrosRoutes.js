import express from 'express'
import LivroController from '../controllers/livroController.js'

const routes = express.Router()

routes.get('/livros', LivroController.booksList)
routes.get('/livros/:id', LivroController.findBookById)
routes.post('/livros', LivroController.registerBook)
routes.put('/livros/:id', LivroController.updateBookById)
routes.delete('/livros/:id', LivroController.deleteBookById)

export default routes
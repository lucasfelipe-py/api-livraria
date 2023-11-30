import express from 'express'
import AutorController from '../controllers/autorController.js'

const routes = express.Router()

routes.get('/autores', AutorController.authorsList)
routes.get('/autores/:id', AutorController.findAuthorById)
routes.post('/autores', AutorController.registerAuthor)
routes.put('/autores/:id', AutorController.updateAuthorById)
routes.delete('/autores/:id', AutorController.deleteAuthorById)

export default routes
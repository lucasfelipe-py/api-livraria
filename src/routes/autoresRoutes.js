import express from 'express'
import AutorController from '../controllers/autorController.js'

const routes = express.Router()

// Get routes
routes.get('/autores', AutorController.authorsList)
routes.get('/autores/:id', AutorController.findAuthorById)
// Post routes
routes.post('/autores', AutorController.registerAuthor)
// Put routes
routes.put('/autores/:id', AutorController.updateAuthorById)
// Delete routes
routes.delete('/autores/:id', AutorController.deleteAuthorById)

export default routes
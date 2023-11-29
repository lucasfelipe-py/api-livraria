import express from "express"
import connDB from "./config/dbConnect.js"
import book from "./models/Livro.js"

const conn = await connDB()

conn.on('error', (err) => {
    console.error('Erro de conexão:', err)
})

conn.once('open', () => {
    console.log('Conexão realizada com sucesso')
})

const app = express()
app.use(express.json())

app.get('/', (_, res) => {
    res.status(200).send('Curso de Node.js')
})

app.get('/livros', (_, res) => {
    res.status(200).json(books)
})

app.get('/livros/:id', (req, res) => {
    const id = getBook(req.params.id)
    res.status(200).json(books[id])
})

app.post('/livros', (req, res) => {
    books.push(req.body)
    res.status(201).send('Livro cadastrado com sucesso!')
})

app.put('/livros/:id', (req, res) => {
    const id = getBook(req.params.id)
    books[id].titulo = req.body.titulo
    res.status(200).json('Livro atualizado com sucesso!')
})

app.delete('/livros/:id', (req, res) => {
    const id = getBook(req.params.id)
    books.splice(id, 1)
    res.status(200).json('Livro deletado com sucesso!')
})

export default app;
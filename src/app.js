import express from "express"

const app = express()
app.use(express.json())

const livros = [
    {
        id: 1,
        titulo: "Harry Potter e o Enigma do Príncipe"
    },
    {
        id: 2,
        titulo: "Arséne Lupin, o Ladrão de Casaca"
    }
]

app.get('/', (_, res) => {
    res.status(200).send('Curso de Node.js')
})

app.get('/livros', (_, res) => {
    res.status(200).json(livros)
})

app.get('/livros/:id', (req, res) => {
    const id = req.params.id - 1
    res.status(200).json(livros[id])
})

app.post('/livros', (req, res) => {
    livros.push(req.body)
    res.status(201).send('Livro cadastrado com sucesso!')
})

app.put('/livros/:id', (req, res) => {
    const id = req.params.id - 1
    livros[id].titulo = req.body.titulo
    res.status(200).json('Livro atualizado com sucesso!')
})

app.delete('/livros/:id', (req, res) => {
    const id = req.params.id - 1
    livros.splice(id, 1)
    res.status(200).json('Livro deletado com sucesso!')
})


export default app;
import express from 'express'

const app = express()
const port = 3333

app.get('/ads', (req, res) => {
    return res.json([
        { id: 1, name: 'Anuncio 1'},
        { id: 2, name: 'Anuncio 2'},
        { id: 3, name: 'Anuncio 3'},
    ])
})

app.listen(port, () => {
    console.log('Server is running on port: ', port)
})
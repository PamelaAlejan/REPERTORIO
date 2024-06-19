import express from 'express'
import { cancionero } from './models/repertorio.model.js'
//import { nanoid } from 'nanoid'

const app = express()

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/canciones', async (req, res) => {
    try {
        const canciones = await cancionero.findAll()
        return res.json(canciones)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ ok: false })
    }
})

app.post('/cancion', async (req, res) => {
    try {
        // const id = nanoid();
        const { titulo, artista, tono } = req.body
        const cancion = await cancionero.create({ titulo, artista, tono })
        return res.json(cancion)

    } catch (error) {
        console.log(error)
        return res.status(500).json({ ok: false })
    }
})

app.put('/cancion', async (req, res) => {
    try {
        const { titulo, artista, tono } = req.body
        const { id } = req.params
        const newdatos = { titulo, artista, tono, id }
        const nuevo = await cancionero.update(newdatos)
        return res.json(nuevo)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ ok: false })
    }
})

app.delete('/cancion', async (req, res) => {
    try {
        // const { rut } = req.params
        const cancion = await cancionero.remove(req.params)
        return res.json(cancion)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ ok: false })
    }

})





const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`servidor inicializado en : http://localhost:${PORT}`)
})
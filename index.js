import express from 'express'
import {pool} from "./db.js";

const app = express()
app.use(express.static('public'));
app.get('/ping', (req, res) => {
    res.send('¡Servidor funcionando, vamos con toda!')
})

app.listen(3000)
console.log('El servidor está escuchando en el puerto 3000')

app.get('/productos', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM Productos');
        res.json(rows);
    } catch (error) {
        res.status(500).send('Error al consultar la base de datos');
    }
});
app.get('/categorias', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM categorias');
        res.json(rows);
    } catch (error) {
        res.status(500).send('Error al consultar categorías');
    }
});
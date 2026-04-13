const express = require('express');
const pool = require('./db'); // Asegúrate de que este archivo exista para la conexión
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// RUTA PARA PRODUCTOS (Con P mayúscula como en tu Railway)
app.get('/productos', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM Productos');
        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al consultar la base de datos de Productos');
    }
});

// RUTA PARA CATEGORÍAS (En minúscula como en tu Railway)
app.get('/categorias', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM categorias');
        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al consultar la base de datos de categorías');
    }
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
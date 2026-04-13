import express from 'express';
import { pool } from './db.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

// Ruta para Productos (P mayúscula)
app.get('/productos', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM Productos');
        res.json(rows);
    } catch (error) {
        console.error("Error en Productos:", error);
        res.status(500).json({ error: "Error en la base de datos" });
    }
});

// Ruta para categorías (minúscula)
app.get('/categorias', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM categorias');
        res.json(rows);
    } catch (error) {
        console.error("Error en Categorias:", error);
        res.status(500).json({ error: "Error en la base de datos" });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor en puerto ${PORT}`);
});
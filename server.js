const express = require('express');
const path = require('path');

const app = express();
const port = 3000; // Puedes usar cualquier puerto que desees

// Ruta estática para servir los archivos
app.use(express.static(path.join(__dirname, '')));
//app.use(express.static(''));

// Ruta para manejar la solicitud del archivo GLB
app.get('./Dragon.glb', (req, res) => {
    res.sendFile(path.join(__dirname, 'Dragon.glb'));
});

// Ruta para manejar todas las demás solicitudes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Inicia el servidor
app.listen(port, () => {
    console.log(`Servidor web local iniciado en http://localhost:${port}`);
});
const express = require('express')
const app = express()
const port = 3000
app.get('/', (req, res) => {
    res.send('Holi!')
})

//Rutas se trabaja en un archivo aparte

app.get('/kinal', (req, res) => {
    res.send('Bienvenidos a Kinal')
})

app.put('/editar/1', (req, res) => {
    res.send('Editando usuario con id 1')
})

app.delete('/delete/1', (req, res) => {
    res.send('Eliminando usuario con id 1')
})

app.post('/create/1', (req, res) => {
    res.send('Creando usuario')
})

app.listen(port, () => {
    console.log(`Escuchando En el puerto ${port}`)
})

// Postman ayuda a comprobar peticiones y testearlas.
// localhost:3000/delete/1 ------> ejemplo de ruta en postman
// Se pueden usar variables de entorno
// Lo mismo con ThunderClient

//--------------------------------------------------------------

// ThunderClient para cosas mas sencillas
// Postman para cosas mas complicadas
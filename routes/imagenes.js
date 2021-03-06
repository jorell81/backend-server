var express = require('express');

var app = express();
const path = require('path');
const fs = require('fs');

app.get('/:tipo/:img', (req, resp, next) => {

    var tipo = req.params.tipo;
    var img = req.params.img;

    var pathImagen = path.resolve(__dirname, `../uploads/${ tipo }/${ img }`);
    if (fs.existsSync(pathImagen)) {
        resp.sendFile(pathImagen);
    } else {
        var pathNoImage = path.resolve(__dirname, `../assets/no-img.jpg`);
        resp.sendFile(pathNoImage);
    }

    /* resp.status(200).json({
        ok: true,
        mensaje: 'Peticion realizada correctamente - imagenes'
    }); */
});

module.exports = app;
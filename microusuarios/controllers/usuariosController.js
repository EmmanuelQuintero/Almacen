const { Router } = require('express');
const router = Router();
const usuariosModel = require('../models/usuariosModel.js');

router.get('/usuarios', async (req, res) => {
    var result;
    result = await usuariosModel.traerUsuarios();
    res.json(result);
});

router.get('/usuarios/:usuario', async (req, res) => {
    const usuario = req.params.usuario;
    var result;
    result = await usuariosModel.traerUsuario(usuario);
    res.json(result[0]);
});

// router.get('/usuarios/:name', async (req, res) => {
//     const name = req.params.name;
//     var result;
//     result = await usuariosModel.traerUsuarioNombre(name);
//     res.json(result[0]);
// });

router.get('/usuarios/:usuario/:password', async (req, res) => {
    const usuario = req.params.usuario;
    const password = req.params.password;
    var result;
    result = await usuariosModel.validarUsuario(usuario, password);
    res.json(result);
});
router.post('/usuarios', async (req, res) => {
    const nombre = req.body.nombre;
    const email = req.body.email;
    const usuario = req.body.usuario;
    const password = req.body.password;
    var result = await usuariosModel.crearUsuario(nombre, email, usuario,
        password);
    res.send("usuario creado");
});
module.exports = router;
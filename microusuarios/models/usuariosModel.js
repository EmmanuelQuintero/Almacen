const mysql = require('mysql2/promise');
const connection = mysql.createPool({
    port: '3306',
    host: 'db',
    user: 'root',
    password: '1234',
    database: 'almacen2'
});
async function traerUsuarios() {
    const result = await connection.query('SELECT * FROM usuarios');
    return result[0];
}

async function traerUsuario(usuario) {
    const result = await connection.query('SELECT * FROM usuarios WHERE usuario = ?', usuario);
    return result[0];
}

async function traerUsuarioNombre(nombre) {
    const result = await connection.query('SELECT * FROM usuarios WHERE nombre = ?', usuario);
    return result[0];
}

async function validarUsuario(usuario, password) {
    const result = await connection.query('SELECT * FROM usuarios WHERE usuario = ? AND password = ?', [usuario, password]);
    return result[0];
}
async function crearUsuario(nombre, email, usuario, password) {
    const result = await connection.query('INSERT INTO usuarios VALUES(?,?,?,?)', [nombre, email, usuario, password]);
    return result;
}
module.exports = {
    traerUsuarios, traerUsuario, validarUsuario, crearUsuario, traerUsuarioNombre
};

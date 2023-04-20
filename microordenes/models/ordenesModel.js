const mysql = require('mysql2/promise');
const connection = mysql.createPool({
    port: '3306',
    host: 'db',
    user: 'root',
    password: '1234',
    database: 'almacen2'
});
async function crearOrden(orden) {
    const user = orden.user;
    const emailCliente = orden.emailCliente;
    const totalCuenta = orden.totalCuenta;
    const result = await connection.query('INSERT INTO ordenes VALUES (null, ?, ?, ?, Now())', [user, emailCliente, totalCuenta]);
    return result;
}
async function traerOrden(id) {
    const result = await connection.query('SELECT * FROM ordenes WHERE id = ? ', id);
    return result[0];
}

async function traerOrdenCliente(nombre) {
    const result = await connection.query('SELECT * FROM ordenes WHERE nombreCliente = ?', nombre);
    return result[0];
}


async function traerOrdenes() {
    const result = await connection.query('SELECT * FROM ordenes');
    return result[0];
}
    module.exports = {
    crearOrden,
    traerOrden,
    traerOrdenes,
    traerOrdenCliente
};

const mysql = require('mysql2/promise');
const connection = mysql.createPool({
    port: 3307,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'almacen2'
});
async function traerProductos() {
    const result = await connection.query('select * from productos;');
    return result
}
async function traerProducto(id) {
    const result = await connection.query('SELECT * FROM productos WHERE id = ? ', [id]);
    return result;
}
async function actualizarProducto(id, inventario) {
    const result = await connection.query('UPDATE productos SET inventario = ? WHERE id = ? ', [inventario, id]);
    return result;
}
async function crearProducto(nombre, precio, inventario) {
    const result = await connection.query('INSERT INTO productos VALUES(null,?,?,?)', [nombre, precio, inventario]);
    return result;
}
module.exports = {
    traerProductos, traerProducto, actualizarProducto, crearProducto
};
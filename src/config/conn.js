const mysql = require('mysql2');

//Creamos un pool de conexiones, en vez de una unica conexion, pues asi atendemos varias conexiones asincronas
const pool = mysql.createPool({
    user: 'root',
    password: 'nachito57',
    host: 'localhost',
    port: 3306 ,
    database: 'funko_g7',
    connectionLimit: 10,
    waitForConnections: true,
    queueLimit: 0
});
//probamos la conexion:
pool.getConnection((err,conn)=>{
    if(err){
        console.log('Error al conectarse a la DB:' + err);
    }else{
        console.log('Conexion a la DB exitosa');
        conn.release();
    }
});

module.exports ={
    conn: pool.promise()
}
// promise para trabajar las promesas en forma asincrona
const mysql = require('mysql2');
require ('dotenv').config();

const pool = mysql.createPool({
    host : process.env.DBHOST,
    user : process.env.DBUSER,
    password : process.env.DBPASS,
    port : process.env.DBPORT,
    waitForConnections : true,
    connectionLimit : 10,
    queueLimit : 0
});

//para controlar si funciona la conexion a la bd, usamos getconnection que lleva un cb, con error y conexion
pool.getConnection((e,conn)=>{
    if(e){
        console.error('Error al conectarse a la bd ' + e);
    } else{
        console.log('Conexion exitosa a la bd');
        conn.release(); //esto indica que se conecto y libera la conexion
    }
});
//exportamos la conexion, con promise, para que sea asincrona
module.exports={
    conn:pool.promise()
};
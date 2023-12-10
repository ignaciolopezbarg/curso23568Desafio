//traemos aca a la conexion para utilizarla
// const {conn} = require ('../config/conn');
//creamos una funcion asincrona, porque no sabemos cuanto tardara la conexion a la DB, y la aplicacion debe seguir funcionando
// const getAll = async ()=>{
//    try{
// const [rows] = await conn.query('SELECT * FROM product;')
// return rows;
//    } catch (error){
// const e = {
//     isError : true,
//     message: `Error al consultar los datos : ${error}`
// }
// return e;
// }
// finally{
//     await conn.releaseConnection();

//    } 
// }
// //realizamos otra consulta:
// const getOne = async (id)=>{
//    try{
// const [rows] = await conn.query('SELECT * FROM product WHERE product_id = ?;' , id);
// return rows;
//    }
//    catch(error){
//     const e = {
//         isError : true,
//         message: `Error al consultar los datos : ${error}`
//     }
//     return e;
// }
// finally{
//     await conn.releaseConnection();

//    } 
// }

// module.exports = {
//     getAll,
//     getOne
// }

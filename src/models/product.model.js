//Aca traemos la logica para poder conectar a la DB, y hacer CRUD, consultar uno o varios productos
//traemos aca a la conexion para utilizarla
const { conn } = require("../config/conn");
//creamos una funcion asincrona, porque no sabemos cuanto tardara la conexion a la DB, y la aplicacion debe seguir funcionando.
//
const getAll = async () => {
  try {
    const [rows] = await conn.query("SELECT product.*, category.category_name, license.license_name FROM (product LEFT JOIN category ON product.category_id = category.category_id) LEFT JOIN license ON product.license_id = license.license_id" );
    return rows;
  } catch (error) {
    const e = {
      isError: true,
      message: `Error al consultar los datos : ${error}`,
    };
    return e;
  } finally {
    await conn.releaseConnection();
  }
};

const getOne = async(id) => {
    try {
        const [rows] = await conn.query(`SELECT * FROM product WHERE product_id = ${id};`);
        return rows;
      } catch (error) {
        const e = {
          isError: true,
          message: `Error al consultar los datos : ${error}`,
        };
        return e;
      } finally {
        await conn.releaseConnection();
      }
}

const getCategories = async () => {
  try {
    const [categories] = await conn.query("SELECT * FROM category" );
    return categories;
  } catch (error) {
    const e = {
      isError: true,
      message: `Error al consultar los datos : ${error}`,
    };
    return e;
  } finally {
    await conn.releaseConnection();
  }
}
const getLicences = async () => {
  try {
    const [licences] = await conn.query("SELECT * FROM license" );
    return licences;
  } catch (error) {
    const e = {
      isError: true,
      message: `Error al consultar los datos : ${error}`,
    };
    return e;
  } finally {
    await conn.releaseConnection();
  }
}


module.exports = {
  getAll,
  getOne,
  getCategories,
  getLicences
};

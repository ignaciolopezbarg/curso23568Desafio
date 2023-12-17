const path = require("path");
const { getAll, getOne } = require("../models/product.model");

module.exports = {
  admin: async (req, res) =>{
    const dataProducts = await getAll()
    // console.log(dataProducts)
    res.render(path.resolve(__dirname, "../views/admin/admin.ejs"), {
      title: "Admin",
      dataProducts
    })
  },
  
  createView: (req, res) =>{

    res.render(path.resolve(__dirname, "../views/admin/create.ejs"), {
      title: "Crear Item",
    })
  },

  createItem: (req, res) => {
    res.send("vista para agregar nuevo item");
  },

  editView: async (req, res) =>{
    const {id} = req.params
    const producto = await getOne(id)
    const licences = await getAll()
    const categories = await getAll()
    console.log(item)
    res.render(path.resolve(__dirname, "../views/admin/edit.ejs"), {
      title: "Editar Item",
      producto,
      licences,
      categories
    });
  },

  editItem: (req, res) => res.send("vista para IMPACTAR LA MODIFICACION DE UN ITEM"),
  deleteItem: (req, res) => res.send("vista para ELIMINAR UN ITEM ESPECIFICO"),
};

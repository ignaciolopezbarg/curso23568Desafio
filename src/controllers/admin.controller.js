const path = require("path");

module.exports = {
  admin: (req, res) =>
    res.render(path.resolve(__dirname, "../views/admin/admin.ejs"), {
      title: "Admin",
    }),
  createView: (req, res) =>
    res.render(path.resolve(__dirname, "../views/admin/create.ejs"), {
      title: "Crear Item",
    }),

  createItem: (req, res) => res.send("vista para agregar nuevo item"),
  editView: (req, res) =>
    res.render(path.resolve(__dirname, "../views/admin/edit.ejs"), {
      title: "Editar Item",
    }),

  editItem: (req, res) => res.send("vista para editar un item"),
  deleteItem: (req, res) => res.send("eliminacion de un item en su id"),
};

const path = require('path');

module.exports ={
    admin: (req,res)=> res.render(path.resolve(__dirname, 'views/admin/admin.ejs')),
    createView: (req,res)=> res.render(path.resolve(__dirname, 'views/admin/create.ejs')),
    
    createItem: (req,res)=> res.send ('vista nuevo item'),
    editView: (req,res)=> res.render(path.resolve(__dirname, 'views/admin/edit.ejs')),
    editItem: (req,res)=> res.send ('vista para editar un item'),
    deleteItem :(req,res)=> res.send ('eliminacion de un item en su id') 
};
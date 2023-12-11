const path = require ('path');

module.exports ={
    shop: (req,res)=>{
        res.render(path.resolve(__dirname,'../views/shop/shop.ejs',{
          title: 'Tienda'  
        }));
    },
     item: (req,res)=>{
         res.render(path.resolve(__dirname,'../views/shop/item.ejs'),{
            title: 'ITEM'
         });
     },
     addItem: (req,res)=> {res.send('ruta para agregar nuevo item')},
     cart: (req,res)=>{res.send('vista cart')},
     addToCart: (req,res)=>res.send ('ruta para agregar un item al carrito')
};
// const {getOne} = require ('../models/productModel');
// const {getAll} = require ('../models/productModel');
module.exports ={
    home:
    (req,res)=>{
        res.render('inicio',{
            title:"Home"
        })},
        //A la ruta le agregue un segundo parametro con el title del head, que esta en la carpeta partials header.ejs
    contact:
    (req,res)=>
    res.render('Route for Contact View',{
        title:'Contacto'
    }),
    about:
    (req,res)=>
    res.send('Route for About View'),
    faqs:
    (req,res)=>
    res.send('Route for Faqs View')
};

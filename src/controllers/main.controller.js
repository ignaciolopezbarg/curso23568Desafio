// const {getOne} = require ('../models/productModel');
// const {getAll} = require ('../models/productModel');
module.exports ={
    home:
    (req,res)=>{
        res.render('inicio')},
    contact:
    (req,res)=>
    res.send('Route for Contact View'),
    about:
    (req,res)=>
    res.send('Route for About View'),
    faqs:
    (req,res)=>
    res.send('Route for Faqs View')
};

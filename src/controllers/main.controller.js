const {getOne} = require ('../models/productModel');
const {getAll} = require ('../models/productModel');
const mainControllers ={
    home:
    async (req,res)=>{
        const results = await getAll();
        if(results.isError){
           return res.status(500).send('Error al consultar los datos');
        }
       return res.send({
            info: 'Route for home view from controller',
            data: results
        });
    },
    home:
    async (req,res)=>{
        const results = await getOne(1);//pedimos el 1
        if(results.isError){
           return res.status(500).send({
            message: 'Error al consultar los datos',
            error: results.message
           });
        }
       return res.send({
            info: 'Route for home view from controller',
            data: results
        });
    },
    contact:
    (req,res)=>res.send('Route for Contact View'),
    about:
    (req,res)=>res.send('Route for About View'),
    faqs:
    (req,res)=>res.send('Route for Faqs View')
};

module.exports = mainControllers;
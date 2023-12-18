const path = require("path");
const {getAll,getLicences} = require ('../models/product.model');
const elegirProductosRandom = require('../../public/js-fede/item-glide-functions');
module.exports ={
    home: async(req,res)=>{
        const originalLicences = await getLicences();
        const licences = originalLicences.slice(0, 3);
        const data = await getAll()
        const itemsRandom = await elegirProductosRandom(data) // guardo 3 productos random sin repetir
        
        console.log(itemsRandom);
        res.render(path.resolve(__dirname, "../views/inicio.ejs"),{
            title:"Home",
            licences,
            itemsRandom
        })
    },

        //A la ruta le agregue un segundo parametro con el title del head, que esta en la carpeta partials header.ejs
    contact: (req,res)=>{
        res.render('Route for Contact View',{
            title:'Contacto'
        })
    },

    about: (req,res)=>{

        res.send('Route for About View')
    },

    faqs:(req,res)=>{
        res.send('Route for Faqs View')
    },
};

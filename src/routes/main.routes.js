const express = require('express');
const router = express.Router();
//importe el metodo Router, que me permite separar en distintas rutas

const {home,contact,about,faqs} = require('../controllers/main.controller.js')

router.get('/home',home);
router.get('/contact',contact);
router.get('/about',about);
router.get('/faqs',faqs);



module.exports = router;
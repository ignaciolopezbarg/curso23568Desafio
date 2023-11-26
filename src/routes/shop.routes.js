const express = require('express');
const router = express.Router();

router.get('shop',(req,res)=>res.send('Route for Shop View'));
router.get('shop/item/:id',(req,res)=>res.send('Route for find and retrieve a product from an Id'));
router.post('shop/item/:id/add',(req,res)=>res.send('Route for add the current item to the shop Cart'));
router.get('shop/cart',(req,res)=>res.send('Route for Cart View'));
router.post('shop/cart',(req,res)=>res.send('Route for checkout page'));

module.exports = router;

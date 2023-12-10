const express = require("express");
const router = express.Router();

const {shop,item,addItem,cart,addToCart} = require("../controllers/shop.controller.js");
//las rutas todas empiezan con shop, entonces, para no escribir tanto, en el middleware del app.js, agrego el shop ahi

router.get("/", shop);
router.get("/item/:id",item);
router.post("/item/:id/add", addItem);
router.get("/cart", cart);
router.post("/cart", addToCart);

module.exports = router;

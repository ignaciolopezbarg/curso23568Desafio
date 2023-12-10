const express = require("express");
const router = express.Router();

const controller = require("../controllers/shop.controller.js");
//las rutas todas empiezan con shop, entonces, para no escribir tanto, en el middleware del app.js, agrego el shop ahi

router.get("/", controller.shop);
router.get("/item/:id", controller.item);
router.post("/item/:id/add", controller.addItem);
router.get("/cart", controller.cart);
router.post("/cart", controller.addToCart);

module.exports = router;

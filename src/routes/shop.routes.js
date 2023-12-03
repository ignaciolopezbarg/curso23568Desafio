const express = require("express");
const router = express.Router();

const shopControllers = require("../controllers/shop.controller.js");
//las rutas todas empiezan con shop, entonces, para no escribir tanto, en el middleware del app.js, agrego el shop ahi

router.get("/", shopControllers.home);
router.get("/item/:id", (req, res) =>
  res.send(`route for find and retrieve an item from an ID ${req.params.id} `)
),
  router.post("/item/:id/add", (req, res) =>
    res.send("devuelve item a adicionar")
  );
router.get("/cart", shopControllers.cart);
router.post("/cart", shopControllers.cart);

module.exports = router;

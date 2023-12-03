const express = require("express");
const router = express.Router();

const authControllers = require("../controllers/auth.controller.js");


router.get("/admin/login", (req,res)=>res.send('ruta para clientes logueados'));
router.post("/admin/login", (req, res) =>
  res.send(`route for create a client `));

  router.get("/admin/register", (req, res) =>
    res.send("devuelve registro clientes")
  );
router.post("/admin/register", (req,res)=> res.send('ruta para crear un registro'));

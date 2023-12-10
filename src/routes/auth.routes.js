const express = require("express");
const router = express.Router();

const {
  login,
  doLogin,
  register,
  doRegister,
} = require("../controllers/auth.controller.js");

router.get("/login", login);

router.post("/login", doLogin);

router.get("/register", register);

router.post("/register", doRegister);

module.exports = router;

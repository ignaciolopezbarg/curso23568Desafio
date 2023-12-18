const express = require("express");
const router = express.Router();
const multer = require('multer');
//const upLoadFiles = require('../middlewares/upLoadFiles');
const {
  admin,
  createView,
  createItem,
  editView,
  editItem,
  deleteItem,
} = require("../controllers/admin.controller.js");

router.get('/',admin);
router.get('/create',createView);
router.post ('/create',createItem);
router.get('/edit/:id',editView);
router.put('/edit/:id',editItem);
router.delete("/delete/:id",deleteItem);

module.exports = router;

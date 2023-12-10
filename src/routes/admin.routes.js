const express = require('express');
const router = express.Router();
//const upLoadFiles = require('../middlewares/upLoadFiles');
const controllers = require ('../controllers/admin.controller.js');

// router.get('/',controllers.adminView);
// router.get('/create',controllers.createView);
// router.post ('/create',controllers.createItem);
// router.post('/create',controllers.Create);
// router.get('/edit/:id',controllers.editView);
// router.get('/edit/:id',controllers.editItem);
router.delete('/delete/:id',controllers.deleteItem);

module.exports = router;

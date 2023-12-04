const express = require('express');
const router = express.Router();
const upLoadFiles = require('../middlewares/upLoadFiles');
const controllers = require ('../controllers/admin.controller');

router.get('/',controllers.adminView);
router.get('/create',controllers.createView);
router.post ('/create',upLoadFiles.array('images',2),controllers.createItem);
router.post('/create/bulk',controllers.bulkCreate);
router.get('/edit/:id',controllers.editView);
router.get('/edit/:id',controllers.editItem);
router.delete('/delete/:id',controllers.deleteItem);



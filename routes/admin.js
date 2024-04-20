const path = require('path');

const express = require('express');

const router = express.Router();

const adminController= require('../controllers/adminController');


router.get('/add-product/:id',adminController.getProductDetails);
// /admin/add-product => GET
router.get('/add-product',adminController.addProductGet);

// /admin/add-product => POST
router.post('/add-product',adminController.addProductPost);



module.exports = router;
